import { Logo } from "@/app/components/Logo";
import { useState, useEffect, useRef, useCallback } from "react";

interface Brick {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  alive: boolean;
}

interface Ball {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

interface Paddle {
  x: number;
  width: number;
  height: number;
  direction: number; // -1 left, 0 still, 1 right
}

function BreakoutGame() {
  const [bricks, setBricks] = useState<Brick[]>([]);
  const [ball, setBall] = useState<Ball>({
    x: 0,
    y: 0,
    vx: 2.2,
    vy: -2.2,
    radius: 10,
  });
  const ballRef = useRef<Ball>({ x: 0, y: 0, vx: 2.2, vy: -2.2, radius: 10 });
  const [paddle, setPaddle] = useState<Paddle>({
    x: 0,
    width: 200,
    height: 15,
    direction: 1,
  });
  const paddleRef = useRef<Paddle>({
    x: 0,
    width: 200,
    height: 15,
    direction: 1,
  });
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);
  const [windowHeight, setWindowHeight] = useState(0);
  const animationRef = useRef<number>();
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize game
  useEffect(() => {
    const initGame = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setWindowHeight(height);

      // Create 2 rows of bricks
      const newBricks: Brick[] = [];
      const brickWidth = 30;
      const brickHeight = 30;
      const rows = 2;
      const padding = 8;
      const topOffset = 0;

      const bricksPerRow = Math.floor(
        (width - padding * 2) / (brickWidth + padding)
      );
      const totalBricksWidth = bricksPerRow * (brickWidth + padding) - padding;
      const startX = (width - totalBricksWidth) / 2;

      let id = 0;
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < bricksPerRow; col++) {
          newBricks.push({
            id: id++,
            x: startX + col * (brickWidth + padding),
            y: topOffset + row * (brickHeight + padding),
            width: brickWidth,
            height: brickHeight,
            alive: true,
          });
        }
      }
      setBricks(newBricks);

      // Initialize ball
      const initialBall = {
        x: width / 2,
        y: height - 150,
        vx: 2.2,
        vy: -2.75,
        radius: 10,
      };
      setBall(initialBall);
      ballRef.current = initialBall;

      // Initialize paddle
      const initialPaddle = {
        x: width / 2 - 100,
        width: 200,
        height: 15,
        direction: 1,
      };
      setPaddle(initialPaddle);
      paddleRef.current = initialPaddle;

      setGameStarted(true);
    };

    initGame();
    window.addEventListener("resize", initGame);
    return () => window.removeEventListener("resize", initGame);
  }, []);

  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "a" || e.key === "A" || e.key === "d" || e.key === "D") {
        setIsAutoPlay(false);
        setPaddle((prev) => {
          const newPaddle = {
            ...prev,
            direction: e.key === "a" || e.key === "A" ? -1 : 1,
          };
          paddleRef.current = newPaddle;
          return newPaddle;
        });
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (
        !isAutoPlay &&
        (e.key === "a" || e.key === "A" || e.key === "d" || e.key === "D")
      ) {
        setPaddle((prev) => {
          const newPaddle = { ...prev, direction: 0 };
          paddleRef.current = newPaddle;
          return newPaddle;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [isAutoPlay]);

  // Game loop
  const gameLoop = useCallback(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Center logo hitbox (the Antiwork text area)
    const centerX = width / 2;
    const centerY = height / 2;
    const logoBoxWidth = 350;
    const logoBoxHeight = 120;
    const logoLeft = centerX - logoBoxWidth / 2;
    const logoRight = centerX + logoBoxWidth / 2;
    const logoTop = centerY - logoBoxHeight / 2;
    const logoBottom = centerY + logoBoxHeight / 2;

    // Update paddle position
    setPaddle((prev) => {
      let newX = prev.x;

      if (isAutoPlay) {
        // Auto-play: only move when ball is coming down towards paddle
        const ballState = ballRef.current;
        const paddleTop = height - 50;
        const distanceTopaddle = paddleTop - ballState.y;

        // Only move if ball is moving down (vy > 0) and getting close
        if (ballState.vy > 0 && distanceTopaddle < 300) {
          // Add significant offset so ball hits edge of paddle for angled bounce
          // Offset direction alternates to create varied angles
          const offsetDirection = Math.sin(Date.now() / 500) > 0 ? 1 : -1;
          const significantOffset =
            offsetDirection * (prev.width * 0.3 + Math.random() * 20);

          // Target position with offset - ball will hit off-center
          const targetX = ballState.x + significantOffset - prev.width / 2;

          // Urgency increases as ball gets closer
          const urgency = Math.max(0.5, 1 - distanceTopaddle / 300);
          const baseSpeed = (6 + Math.random() * 6) * urgency;

          const paddleCenter = prev.x + prev.width / 2;
          const distance = Math.abs(ballState.x - paddleCenter);
          const speed = Math.min(baseSpeed, distance * 0.3 + 3);

          // Move toward offset target position
          if (targetX > prev.x + 5) {
            newX = prev.x + speed;
          } else if (targetX < prev.x - 5) {
            newX = prev.x - speed;
          }
        }
      } else {
        // Manual control
        const speed = 6;
        newX = prev.x + prev.direction * speed;
      }

      // Keep paddle in bounds
      newX = Math.max(0, Math.min(width - prev.width, newX));
      const newPaddle = { ...prev, x: newX };
      paddleRef.current = newPaddle;
      return newPaddle;
    });

    // Update ball position
    setBall((prev) => {
      let { x, y, vx, vy } = prev;
      const { radius } = prev;

      x += vx;
      y += vy;

      // Bounce off walls
      if (x - radius <= 0 || x + radius >= width) {
        vx = -vx;
        x = Math.max(radius, Math.min(width - radius, x));
      }
      if (y - radius <= 0) {
        vy = -vy;
        y = radius;
      }

      // Bounce off paddle
      const paddleState = paddleRef.current;
      const paddleTop = height - 50;
      if (
        y + radius >= paddleTop &&
        y + radius <= paddleTop + paddleState.height &&
        x >= paddleState.x &&
        x <= paddleState.x + paddleState.width
      ) {
        vy = -Math.abs(vy);
        // Add some angle based on where ball hits paddle
        const hitPos = (x - paddleState.x) / paddleState.width;
        vx = (hitPos - 0.5) * 4;
        y = paddleTop - radius;
      }

      // Bounce off center logo
      if (
        x + radius > logoLeft &&
        x - radius < logoRight &&
        y + radius > logoTop &&
        y - radius < logoBottom
      ) {
        const overlapLeft = x + radius - logoLeft;
        const overlapRight = logoRight - (x - radius);
        const overlapTop = y + radius - logoTop;
        const overlapBottom = logoBottom - (y - radius);
        const minOverlap = Math.min(
          overlapLeft,
          overlapRight,
          overlapTop,
          overlapBottom
        );

        if (minOverlap === overlapLeft || minOverlap === overlapRight) {
          vx = -vx;
          x =
            minOverlap === overlapLeft ? logoLeft - radius : logoRight + radius;
        } else {
          vy = -vy;
          y =
            minOverlap === overlapTop ? logoTop - radius : logoBottom + radius;
        }
      }

      // Reset ball if it goes below paddle
      if (y > height) {
        const resetBall = {
          x: width / 2,
          y: height - 150,
          vx: (Math.random() - 0.5) * 3.3,
          vy: -2.75,
          radius,
        };
        ballRef.current = resetBall;
        return resetBall;
      }

      const newBall = { ...prev, x, y, vx, vy };
      ballRef.current = newBall;
      return newBall;
    });

    // Check brick collisions
    setBall((ballState) => {
      let { x, y, vx, vy } = ballState;
      const { radius } = ballState;
      let hitBrickId: number | null = null;

      setBricks((prevBricks) => {
        const newBricks = prevBricks.map((brick) => {
          if (!brick.alive || hitBrickId !== null) return brick;

          if (
            x + radius > brick.x &&
            x - radius < brick.x + brick.width &&
            y + radius > brick.y &&
            y - radius < brick.y + brick.height
          ) {
            hitBrickId = brick.id;

            // Determine bounce direction and reposition ball
            const overlapLeft = x + radius - brick.x;
            const overlapRight = brick.x + brick.width - (x - radius);
            const overlapTop = y + radius - brick.y;
            const overlapBottom = brick.y + brick.height - (y - radius);
            const minOverlap = Math.min(
              overlapLeft,
              overlapRight,
              overlapTop,
              overlapBottom
            );

            if (minOverlap === overlapLeft) {
              vx = -Math.abs(vx);
              x = brick.x - radius;
            } else if (minOverlap === overlapRight) {
              vx = Math.abs(vx);
              x = brick.x + brick.width + radius;
            } else if (minOverlap === overlapTop) {
              vy = -Math.abs(vy);
              y = brick.y - radius;
            } else {
              vy = Math.abs(vy);
              y = brick.y + brick.height + radius;
            }

            return { ...brick, alive: false };
          }
          return brick;
        });

        // Reset bricks and ball if all destroyed
        if (newBricks.every((b) => !b.alive)) {
          // Reset ball to center for new round
          const width = window.innerWidth;
          const height = window.innerHeight;
          x = width / 2;
          y = height - 150;
          vx = (Math.random() - 0.5) * 3.3;
          vy = -2.75;
          return newBricks.map((b) => ({ ...b, alive: true }));
        }

        return newBricks;
      });

      if (hitBrickId !== null) {
        const newBall = { ...ballState, x, y, vx, vy };
        ballRef.current = newBall;
        return newBall;
      }
      return ballState;
    });

    animationRef.current = requestAnimationFrame(gameLoop);
  }, [isAutoPlay]);

  useEffect(() => {
    if (gameStarted) {
      animationRef.current = requestAnimationFrame(gameLoop);
      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
  }, [gameStarted, gameLoop]);

  const [logoSize, setLogoSize] = useState(32);

  useEffect(() => {
    const updateLogoSize = () => {
      if (window.innerWidth >= 1280) {
        setLogoSize(64);
      } else if (window.innerWidth >= 1024) {
        setLogoSize(36);
      } else if (window.innerWidth >= 640) {
        setLogoSize(30);
      } else {
        setLogoSize(24);
      }
    };

    updateLogoSize();
    window.addEventListener("resize", updateLogoSize);
    return () => window.removeEventListener("resize", updateLogoSize);
  }, []);

  return (
    <div ref={containerRef} className="relative h-full w-full overflow-hidden">
      {/* Bricks */}
      {bricks.map((brick) =>
        brick.alive ? (
          <div
            key={brick.id}
            className="absolute opacity-30"
            style={{
              left: brick.x,
              top: brick.y,
              width: brick.width,
              height: brick.height,
            }}
          >
            <Logo
              size={brick.width}
              color="currentColor"
              background="transparent"
            />
          </div>
        ) : null
      )}

      {/* Ball */}
      <div
        className="absolute rounded-full bg-blue-500"
        style={{
          left: ball.x - ball.radius,
          top: ball.y - ball.radius,
          width: ball.radius * 2,
          height: ball.radius * 2,
        }}
      />

      {/* Paddle */}
      <div
        className="absolute rounded-lg bg-gray-800 dark:bg-gray-200"
        style={{
          left: paddle.x,
          top: windowHeight - 50,
          width: paddle.width,
          height: paddle.height,
        }}
      />

      {/* Center logo/text */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="relative z-10 space-y-6 text-center">
          <h2 className="mt-8 text-4xl font-bold text-black dark:text-white">
            <div className="mb-4 flex items-center justify-center md:mb-0">
              <div className="mt-[1px] md:mt-[0px] lg:mt-[1px] xl:mt-[2px]">
                <Logo
                  size={logoSize}
                  color="currentColor"
                  background="transparent"
                />
              </div>
              <h1 className="ml-3 text-2xl font-bold sm:text-3xl lg:text-4xl xl:text-6xl">
                Antiwork
              </h1>
            </div>
          </h2>
          <h2 className="text-xl text-gray-500 sm:text-2xl lg:text-3xl xl:text-4xl dark:text-gray-400">
            2026 Public Annual Meeting
          </h2>
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 left-4 text-sm text-gray-400 md:text-base">
        {isAutoPlay ? "Auto-playing" : "Manual control"} • A/D to control
      </div>
    </div>
  );
}

export default function Slide1() {
  return <BreakoutGame />;
}

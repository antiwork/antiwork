"use client";

import { SlideDeck } from "@/components/SlideDeck";
import Slide1 from "./slides/1";
import Slide2 from "./slides/2";
import Slide3 from "./slides/3";
import Slide5b from "./slides/5b";
import SlideCeoTransition from "./slides/ceo-transition";
import SlideTeamChanges from "./slides/team-changes";
import SlideTeamCompensation from "./slides/team-compensation";
import SlideBounties from "./slides/bounties";
import Slide7 from "./slides/7";
import SlideHighlights from "./slides/shipped/highlights";
import SlideReviews from "./slides/shipped/reviews";
import SlideInstallments from "./slides/shipped/installments";
import SlideDiscountCode from "./slides/shipped/discount-code";
import SlideChurnAnalytics from "./slides/shipped/churn-analytics";
import SlideDailyPayouts from "./slides/shipped/daily-payouts";
import SlideCommunity from "./slides/shipped/community";
import SlideTaxCenter from "./slides/shipped/tax-center";
import SlideFlexileGitHub from "./slides/shipped/flexile-github";
import SlideSmallBets from "./slides/small-bets";
import SlideRoadmap from "./slides/roadmap";
import SlidePullRequests from "./slides/pull-requests";
import SlideSupportResponseTime from "./slides/support-response-time";
import SlideSupportHistogram from "./slides/support-histogram";
import SlideBuyback from "./slides/buyback";
import SlideBalanceSheet from "./slides/balance-sheet";
import SlideCodeActivity from "./slides/code-activity";

export default function AnnualMeeting() {
  const slides = [
    <Slide1 key={1} />,
    <SlideCeoTransition key="ceo-transition" />,
    <Slide2 key={2} />,
    <Slide3 key={3} />,
    <Slide5b key="5b" />,
    <SlideBalanceSheet key="balance-sheet" />,
    <SlideTeamChanges key="team-changes" />,
    <SlideTeamCompensation key="team-compensation" />,
    <SlideBounties key="bounties" />,
    <SlidePullRequests key="pull-requests" />,
    <SlideCodeActivity key="code-activity" />,
    <SlideSupportResponseTime key="support-response-time" />,
    <SlideSupportHistogram key="support-histogram" />,
    <SlideHighlights key="highlights" />,
    <SlideReviews key="reviews" />,
    <SlideInstallments key="installments" />,
    <SlideDiscountCode key="discount-code" />,
    <SlideChurnAnalytics key="churn-analytics" />,
    <SlideDailyPayouts key="daily-payouts" />,
    <SlideCommunity key="community" />,
    <SlideTaxCenter key="tax-center" />,
    <SlideFlexileGitHub key="flexile-github" />,
    <SlideSmallBets key="small-bets" />,
    <SlideRoadmap key="roadmap" />,
    <SlideBuyback key="buyback" />,
    <Slide7 key={7} />,
  ];

  return <SlideDeck slides={slides} />;
}

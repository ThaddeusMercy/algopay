import React from "react";
import { BoldNavbar } from "@/ui/components/BoldNavbar";
import { BoldNavbarMobile } from "@/ui/components/BoldNavbarMobile";
import { Button } from "@/ui/components/Button";
import { IconWithBackground } from "@/ui/components/IconWithBackground";
import { BoldFooter } from "@/ui/components/BoldFooter";
import Squares from "./Squares";
import { 
  Clock, 
  DollarSign, 
  Globe, 
  Shield, 
  Zap, 
  Bot, 
  Star,
  Wallet,
  ArrowRight
} from 'lucide-react';
import { Bolt } from './Icons'


interface AlgopayLandingPageProps {
  onGetStarted: () => void;
}

function AlgopayLandingPage({ onGetStarted }: AlgopayLandingPageProps) {
  return (
    <div className="flex h-full w-full flex-col items-start bg-default-background">
      {/* Navigation */}
      <div className="flex w-full flex-col items-center justify-center gap-2 bg-default-background px-6 py-6 mobile:px-2 mobile:py-2">
        <BoldNavbar className="mobile:hidden" onGetStarted={onGetStarted} />
        <BoldNavbarMobile className="hidden mobile:flex" onGetStarted={onGetStarted} />
      </div>

      {/* Hero Section */}
      <div className="flex w-full flex-col items-center justify-center gap-12 b px-6 py-32 relative">
        {/* Squares Background */}
        <Squares 
          speed={0.5} 
          squareSize={40}
          direction='diagonal'
          borderColor = "#f1f1f1"
          hoverFillColor = "#F1F1F1"
        />
        {/* Content */}
        <div className="flex w-full flex-col items-center justify-center gap-6 z-10">
          <span className="w-full max-w-[1024px] whitespace-pre-wrap font-['Montserrat'] text-[96px] font-[900] leading-[84px] text-brand-800 text-center -tracking-[0.04em] mobile:font-['Montserrat'] mobile:text-[52px] mobile:font-[900] mobile:leading-[68px] mobile:tracking-normal">
            {" The Future of "} <br/> Global Payroll 
          </span>
          
          <span className="w-full max-w-[768px] whitespace-pre-wrap font-['Montserrat'] text-[22px] font-[600] leading-[26px] text-brand-800 text-center -tracking-[0.015em]">
            {
              "Revolutionary AI-powered payroll solution built on Algorand blockchain. Process instant global payments with ultra-low fees, automated token swaps, and military-grade security."
            }
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 z-10">
          <Button
            size="large"
            onClick={onGetStarted}
          >
            Get Started
          </Button>
         
        </div>
      </div>

      {/* Partners Section */}
      <div id="features-section" className="flex w-full flex-col items-center justify-center gap-12 bg-neutral-100 px-6 py-32">
        <div className="flex w-full max-w-[1280px] flex-col items-start gap-2">
          <span className="w-full font-['Montserrat'] text-[36px] font-[700] leading-[40px] text-default-font text-center -tracking-[0.02em]">
           Built With Modern Tech Stack
          </span>
        </div>
        <div className="w-full items-center justify-center gap-6 grid grid-cols-3 mobile:flex-col mobile:flex-nowrap mobile:gap-6 mobile:grid mobile:grid-cols-2">
          <div className="flex grow shrink-0 basis-0 items-center justify-center gap-4 rounded-2xl bg-default-background px-6 py-6">
            <img
              className="h-12 flex-none object-cover"
              src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Algorand_logo.svg"
              alt="Company logo"
            />
          </div>
          <div className="flex grow shrink-0 basis-0 items-center justify-center gap-4 rounded-2xl bg-default-background px-6 py-6">
            <img
              className="h-12 flex-none object-cover"
              alt="Company logo"
              src="https://perawallet.s3.amazonaws.com/images/logo.svg"
            />
          </div>
          <div className="flex grow shrink-0 basis-0 items-center justify-center gap-4 rounded-2xl bg-default-background px-6 py-6">
            <Bolt className="w-4 h-full" /> 
          </div>
        </div>
      </div>

      {/* Main Feature Section */}
      <div className="flex w-full flex-col items-center justify-center gap-12 bg-default-background px-6 py-32">
        <div className="flex w-full max-w-[1280px] flex-col items-start gap-12">
          <span className="w-full max-w-[576px] font-['Montserrat'] text-[50px] font-[700] leading-[56px] text-brand-900 -tracking-[0.025em]">
            Revolutionize your payroll operations
          </span>
        </div>
        <div className="flex min-h-[768px] w-full max-w-[1280px] grow shrink-0 basis-0 flex-wrap items-center justify-center rounded-[32px] bg-neutral-100">
          <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-start gap-2 self-stretch rounded-[32px]  px-12 py-12">
            <img
              className="w-full grow shrink-0 basis-0 rounded-md object-cover"
              src="https://imgix.bustle.com/uploads/image/2022/3/16/a602be78-3ef7-4743-8b48-c57ec38bb200-friends-header.jpg?w=560&h=546&fit=crop&crop=faces&dpr=2"
              alt="Blockchain payroll"
            />
          </div>
          <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-start justify-center gap-12 self-stretch px-12 py-12">
            <div className="flex flex-col items-start justify-center gap-6">
              <span className="font-['Montserrat'] text-[30px] font-[700] leading-[34px] text-default-font -tracking-[0.025em]">
                Send payments anywhere in the world instantly
              </span>
              <span className="whitespace-pre-wrap font-['Montserrat'] text-[18px] font-[400] leading-[26px] text-subtext-color -tracking-[0.01em]">
                {
                  "Minimize your compliance risks with our blockchain-based system and round-the-clock support. Process payments via local networks and cross-border transfers with Algorand's lightning-fast finality."
                }
              </span>
              <div className="flex flex-col items-start justify-center gap-2">
                <div className="flex items-center gap-2">
                  <IconWithBackground size="small" icon={<Globe />} />
                  <span className="font-['Montserrat'] text-[14px] font-[500] leading-[20px] text-default-font">
                   GLOBAL REACH
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <IconWithBackground size="small" icon={<DollarSign />} />
                  <span className="font-['Montserrat'] text-[14px] font-[500] leading-[20px] text-default-font">
                   ULTRA-LOW FEES
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <IconWithBackground size="small" icon={<Clock />} />
                  <span className="font-['Montserrat'] text-[14px] font-[500] leading-[20px] text-default-font">
                    4-SECOND FINALITY
                  </span>
                </div>
              </div>
            </div>
            <Button
              size="large"
              onClick={onGetStarted}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <div id="benefits-section" className="flex w-full flex-col items-center justify-center gap-12 bg-neutral-100 px-6 py-32">
        <div className="flex w-full max-w-[1280px] mobile:max-w-[400px] flex-col items-start gap-2">
          <span className="w-full font-['Montserrat'] text-[36px] font-[700] leading-[40px] text-default-font text-center -tracking-[0.02em]">
            Process payments globally with ultra-low fees
          </span>
        </div>
        <div className="flex w-full max-w-[1280px] flex-wrap items-center justify-center gap-6 mobile:flex-col mobile:flex-nowrap mobile:gap-6 mobile:grid mobile:grid-cols-1">
          <div className="flex min-w-[240px] grow shrink-0 basis-0 flex-col items-start justify-end gap-8 self-stretch rounded-[32px] bg-default-background px-8 py-8">
            <IconWithBackground
              variant="neutral"
              size="x-large"
              icon={<Clock />}
            />
            <div className="flex w-full grow shrink-0 basis-0 flex-col items-start justify-end gap-6">
              <span className="w-full max-w-[448px] whitespace-pre-wrap font-['Montserrat'] text-[48px] font-[900] leading-[44px] text-default-font -tracking-[0.04em] mobile:font-['Montserrat'] mobile:text-[40px] mobile:font-[900] mobile:leading-[40px] mobile:tracking-normal">
                {"4-SECOND FINALITY"}
              </span>
              <span className="w-full max-w-[576px] whitespace-pre-wrap font-['Montserrat'] text-[18px] font-[400] leading-[26px] text-subtext-color -tracking-[0.01em]">
                {
                  "94% of transfers complete in less than 4 seconds with Algorand's lightning-fast blockchain technology."
                }
              </span>
            </div>
          </div>
          <div className="flex min-w-[240px] grow shrink-0 basis-0 flex-col items-start justify-end gap-8 self-stretch rounded-[32px] bg-default-background px-8 py-8">
            <IconWithBackground
              variant="neutral"
              size="x-large"
              icon={<DollarSign />}
            />
            <div className="flex w-full grow shrink-0 basis-0 flex-col items-start justify-end gap-6">
              <span className="w-full max-w-[448px] whitespace-pre-wrap font-['Montserrat'] text-[48px] font-[900] leading-[44px] text-default-font -tracking-[0.04em] mobile:font-['Montserrat'] mobile:text-[40px] mobile:font-[900] mobile:leading-[40px] mobile:tracking-normal">
                {"ULTRA-LOW FEES"}
              </span>
              <span className="w-full max-w-[576px] whitespace-pre-wrap font-['Montserrat'] text-[18px] font-[400] leading-[26px] text-subtext-color -tracking-[0.01em]">
                {
                  "Pay just 0.001 ALGO per transaction, saving up to 95% compared to traditional banking fees."
                }
              </span>
            </div>
          </div>
          <div className="flex min-w-[240px] grow shrink-0 basis-0 flex-col items-start justify-end gap-8 self-stretch rounded-[32px] bg-default-background px-8 py-8">
            <IconWithBackground
              variant="neutral"
              size="x-large"
              icon={<Globe />}
            />
            <div className="flex w-full grow shrink-0 basis-0 flex-col items-start justify-end gap-6">
              <span className="w-full max-w-[448px] whitespace-pre-wrap font-['Montserrat'] text-[48px] font-[900] leading-[44px] text-default-font -tracking-[0.04em] mobile:font-['Montserrat'] mobile:text-[40px] mobile:font-[900] mobile:leading-[40px] mobile:tracking-normal">
                {"GLOBAL REACH"}
              </span>
              <span className="w-full max-w-[576px] whitespace-pre-wrap font-['Montserrat'] text-[18px] font-[400] leading-[26px] text-subtext-color -tracking-[0.01em]">
                {
                  "Send payments to employees and contractors in 190+ countries with no intermediaries."
                }
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="flex w-full flex-col items-center justify-center gap-12 bg-default-background px-6 py-32">
        <div className="flex w-full max-w-[768px] flex-col items-start gap-4">
          <span className="w-full font-['Montserrat'] text-[36px] font-[700] leading-[40px] text-brand-900 text-center -tracking-[0.02em]">
            Streamline your global payroll operations
          </span>
          <span className="whitespace-pre-wrap font-['Montserrat'] text-[18px] font-[400] leading-[26px] text-default-font text-center -tracking-[0.01em]">
            {
              "From multinational corporations to growing startups, our clients use Algopay to send their employees' salaries to more countries, faster and with lower fees."
            }
          </span>
        </div>
        <div className="flex w-full max-w-[1280px] flex-wrap items-center justify-center gap-6 mobile:flex-col mobile:flex-wrap mobile:gap-6">
          <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-start justify-end gap-8 self-stretch rounded-[32px] bg-neutral-100 px-8 py-8">
            <IconWithBackground size="x-large" icon={<Wallet />} />
            <div className="flex w-full grow shrink-0 basis-0 flex-col items-start justify-end gap-6">
              <span className="w-full max-w-[448px] whitespace-pre-wrap font-['Montserrat'] text-[48px] font-[900] leading-[44px] text-brand-900 -tracking-[0.04em] mobile:font-['Montserrat'] mobile:text-[40px] mobile:font-[900] mobile:leading-[40px] mobile:tracking-normal">
                {"ENTERPRISE PAYROLL"}
              </span>
              <span className="w-full max-w-[576px] whitespace-pre-wrap font-['Montserrat'] text-[18px] font-[400] leading-[26px] text-default-font -tracking-[0.01em]">
                {
                  "Revolutionize your company's global payroll by sending and receiving cross-border payments with minimal fees and maximum security."
                }
              </span>
            </div>
          </div>
          <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-start justify-end gap-8 self-stretch rounded-[32px] bg-neutral-100 px-8 py-8">
            <IconWithBackground size="x-large" icon={<Globe />} />
            <div className="flex w-full grow shrink-0 basis-0 flex-col items-start justify-end gap-6">
              <span className="w-full max-w-[448px] whitespace-pre-wrap font-['Montserrat'] text-[48px] font-[900] leading-[44px] text-brand-900 -tracking-[0.04em] mobile:font-['Montserrat'] mobile:text-[40px] mobile:font-[900] mobile:leading-[40px] mobile:tracking-normal">
                {"REMOTE TEAMS"}
              </span>
              <span className="w-full max-w-[576px] whitespace-pre-wrap font-['Montserrat'] text-[18px] font-[400] leading-[26px] text-default-font -tracking-[0.01em]">
                {
                  "From invoice payments to expense tracking – connect with your global workforce and pay them in their preferred currency."
                }
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div id="about-section" className="flex w-full flex-col items-center justify-center gap-24 bg-neutral-100 px-6 py-32">
        <div className="flex w-full flex-col items-center justify-center gap-6">
          <span className="w-full max-w-[1024px] whitespace-pre-wrap font-['Montserrat'] text-[62px] font-[900] leading-[58px] text-default-font text-center -tracking-[0.04em] mobile:font-['Montserrat'] mobile:text-[48px] mobile:font-[900] mobile:leading-[44px] mobile:tracking-normal">
            {"HOW TO GET STARTED WITH ALGOPAY"}
          </span>
        </div>
        <div className="flex w-full max-w-[1280px] flex-col items-center justify-center gap-6">
          <div className="flex w-full grow shrink-0 basis-0 flex-wrap items-start gap-6 mobile:flex-col mobile:flex-wrap mobile:gap-6">
            <div className="flex min-w-[240px] grow shrink-0 basis-0 flex-col items-start gap-12 self-stretch rounded-[32px] bg-default-background px-12 pt-16 pb-12">
              <span className="whitespace-pre-wrap font-['Montserrat'] text-[72px] font-[600] leading-[68px] text-default-font -tracking-[0.04em]">
                {"1"}
              </span>
              <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-6 pb-6">
                <span className="w-full whitespace-pre-wrap font-['Montserrat'] text-[30px] font-[700] leading-[34px] text-default-font -tracking-[0.025em]">
                  {"Quick Registration\n"}
                </span>
                <span className="w-full whitespace-pre-wrap font-['Montserrat'] text-[18px] font-[400] leading-[26px] text-default-font -tracking-[0.01em]">
                  {
                    "Sign up for free in under a minute. All you need is an email address to get started."
                  }
                </span>
              </div>
            </div>
            <div className="flex min-w-[240px] grow shrink-0 basis-0 flex-col items-start gap-12 self-stretch rounded-[32px] bg-default-background px-12 pt-16 pb-12">
              <span className="whitespace-pre-wrap font-['Montserrat'] text-[72px] font-[600] leading-[68px] text-default-font -tracking-[0.04em]">
                {"2"}
              </span>
              <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-6 pb-6">
                <span className="w-full whitespace-pre-wrap font-['Montserrat'] text-[30px] font-[700] leading-[34px] text-default-font -tracking-[0.025em]">
                  {"Connect Wallet\n"}
                </span>
                <span className="w-full whitespace-pre-wrap font-['Montserrat'] text-[18px] font-[400] leading-[26px] text-default-font -tracking-[0.01em]">
                  {
                    "Connect your Algorand wallet to enable secure, instant payments with transparent fees."
                  }
                </span>
              </div>
            </div>
            <div className="flex min-w-[240px] grow shrink-0 basis-0 flex-col items-start gap-12 self-stretch rounded-[32px] bg-default-background px-12 pt-16 pb-12">
              <span className="whitespace-pre-wrap font-['Montserrat'] text-[72px] font-[600] leading-[68px] text-default-font -tracking-[0.04em]">
                {"3"}
              </span>
              <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-6 pb-6">
                <span className="w-full whitespace-pre-wrap font-['Montserrat'] text-[30px] font-[700] leading-[34px] text-default-font -tracking-[0.025em]">
                  {"Add Employees\n"}
                </span>
                <span className="w-full whitespace-pre-wrap font-['Montserrat'] text-[18px] font-[400] leading-[26px] text-default-font -tracking-[0.01em]">
                  {
                    "Add your team members individually or bulk upload via CSV with their wallet addresses."
                  }
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-full grow shrink-0 basis-0 flex-wrap items-start gap-6 mobile:flex-col mobile:flex-wrap mobile:gap-6">
            <div className="flex min-w-[240px] grow shrink-0 basis-0 flex-col items-start gap-12 self-stretch rounded-[32px] bg-default-background px-12 pt-16 pb-12">
              <span className="whitespace-pre-wrap font-['Montserrat'] text-[72px] font-[600] leading-[68px] text-default-font -tracking-[0.04em]">
                {"4"}
              </span>
              <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-6 pb-6">
                <span className="w-full whitespace-pre-wrap font-['Montserrat'] text-[30px] font-[700] leading-[34px] text-default-font -tracking-[0.025em]">
                  {"Set Up Payroll\n"}
                </span>
                <span className="w-full whitespace-pre-wrap font-['Montserrat'] text-[18px] font-[400] leading-[26px] text-default-font -tracking-[0.01em]">
                  {
                    "Configure salaries, departments, and payment schedules for your entire organization.\n"
                  }
                </span>
              </div>
            </div>
            <div className="flex min-w-[240px] grow shrink-0 basis-0 flex-col items-start gap-12 self-stretch rounded-[32px] bg-default-background px-12 pt-16 pb-12">
              <span className="whitespace-pre-wrap font-['Montserrat'] text-[72px] font-[600] leading-[68px] text-default-font -tracking-[0.04em]">
                {"5"}
              </span>
              <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-6 pb-6">
                <span className="w-full whitespace-pre-wrap font-['Montserrat'] text-[30px] font-[700] leading-[34px] text-default-font -tracking-[0.025em]">
                  {"Process Payments"}
                </span>
                <span className="w-full whitespace-pre-wrap font-['Montserrat'] text-[18px] font-[400] leading-[26px] text-default-font -tracking-[0.01em]">
                  {
                    "Send payments with a single click using ALGO or USDC tokens with minimal transaction fees."
                  }
                </span>
              </div>
            </div>
            <div className="flex min-w-[240px] grow shrink-0 basis-0 flex-col items-start gap-12 self-stretch rounded-[32px] bg-default-background px-12 pt-16 pb-12">
              <span className="whitespace-pre-wrap font-['Montserrat'] text-[72px] font-[600] leading-[68px] text-default-font -tracking-[0.04em]">
                {"6"}
              </span>
              <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-6 pb-6">
                <span className="w-full whitespace-pre-wrap font-['Montserrat'] text-[30px] font-[700] leading-[34px] text-default-font -tracking-[0.025em]">
                  {"Track & Analyze"}
                </span>
                <span className="w-full whitespace-pre-wrap font-['Montserrat'] text-[18px] font-[400] leading-[26px] text-default-font -tracking-[0.01em]">
                  {
                    "Monitor all transactions in real-time with AI-powered analytics and insights."
                  }
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="flex w-full flex-col items-center justify-center gap-12 bg-default-background px-6 py-32">
        <div className="flex w-full max-w-[1024px] flex-col items-center justify-center gap-8">
          <span className="w-full whitespace-pre-wrap font-['Montserrat'] text-[62px] font-[900] leading-[58px] text-brand-900 text-center -tracking-[0.04em] mobile:font-['Montserrat'] mobile:text-[40px] mobile:font-[900] mobile:leading-[40px] mobile:tracking-normal">
            {" CHOOSE ALGOPAY FOR YOUR GLOBAL PAYROLL"}
          </span>
          <span className="max-w-[768px] whitespace-pre-wrap font-['Montserrat'] text-[20px] font-[400] leading-[28px] text-default-font text-center -tracking-[0.015em]">
            {
              "It's your money. Trust our blockchain technology to send it where it needs to go, just take our word for it - and get started today."
            }
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-6">
        
          <span className="max-w-[768px] whitespace-pre-wrap font-['Montserrat'] text-[20px] font-[600] leading-[28px] text-brand-900 underline text-center -tracking-[0.015em]">
            <Button
                      onClick={onGetStarted}
                      className="btn-primary text-sm px-6 py-2"
                    >
                      Get Started
                    </Button> 
          </span>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing-section" className="flex w-full flex-col items-center justify-center gap-12 bg-neutral-100 px-6 py-32">
        <div className="flex w-full max-w-[1024px] flex-col items-center justify-center gap-8">
          <span className="w-full whitespace-pre-wrap font-['Montserrat'] text-[62px] font-[900] leading-[58px] text-brand-900 text-center -tracking-[0.04em] mobile:font-['Montserrat'] mobile:text-[40px] mobile:font-[900] mobile:leading-[40px] mobile:tracking-normal">
            {"CHOOSE YOUR PLAN"}
          </span>
          <span className="max-w-[768px] whitespace-pre-wrap font-['Montserrat'] text-[20px] font-[400] leading-[28px] text-default-font text-center -tracking-[0.015em]">
            {
              "Start free and scale with confidence. Our pricing grows with your team size while keeping costs predictable."
            }
          </span>
        </div>
        <div className="flex w-full max-w-[1280px] flex-wrap items-stretch justify-center gap-6 mobile:flex-col mobile:flex-wrap mobile:gap-6">
          {/* Starter Plan */}
          <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-start gap-8 self-stretch rounded-[32px] bg-default-background px-8 py-12">
            <div className="flex w-full flex-col items-start gap-6">
              <div className="flex flex-col items-start gap-2">
                <span className="font-['Montserrat'] text-[30px] font-[700] leading-[34px] text-default-font -tracking-[0.025em]">
                  Starter
                </span>
                <span className="font-['Montserrat'] text-[18px] font-[400] leading-[26px] text-subtext-color -tracking-[0.01em]">
                  Perfect for small teams getting started with blockchain payroll
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-['Montserrat'] text-[48px] font-[900] leading-[44px] text-brand-900 -tracking-[0.04em]">
                  Free
                </span>
                <span className="font-['Montserrat'] text-[18px] font-[400] leading-[26px] text-subtext-color -tracking-[0.01em]">
                  forever
                </span>
              </div>
            </div>
            <div className="flex w-full flex-col items-start gap-4">
              <div className="flex items-center gap-3">
                <IconWithBackground 
                  variant="success" 
                  size="small" 
                  icon={<Shield />} 
                />
                <span className="font-['Montserrat'] text-[16px] font-[500] leading-[22px] text-default-font">
                  Up to 5 employees
                </span>
              </div>
              <div className="flex items-center gap-3">
                <IconWithBackground 
                  variant="success" 
                  size="small" 
                  icon={<Shield />} 
                />
                <span className="font-['Montserrat'] text-[16px] font-[500] leading-[22px] text-default-font">
                  Basic payroll processing
                </span>
              </div>
              <div className="flex items-center gap-3">
                <IconWithBackground 
                  variant="success" 
                  size="small" 
                  icon={<Shield />} 
                />
                <span className="font-['Montserrat'] text-[16px] font-[500] leading-[22px] text-default-font">
                  ALGO & USDC payments
                </span>
              </div>
              <div className="flex items-center gap-3">
                <IconWithBackground 
                  variant="success" 
                  size="small" 
                  icon={<Shield />} 
                />
                <span className="font-['Montserrat'] text-[16px] font-[500] leading-[22px] text-default-font">
                  Email support
                </span>
              </div>
            </div>
            <Button
              size="large"
              onClick={onGetStarted}
              className="w-full mt-auto"
            >
              Get Started Free
            </Button>
          </div>

          {/* Professional Plan */}
          <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-start gap-8 self-stretch rounded-[32px] bg-brand-900 px-8 py-12 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-default-background rounded-full px-4 py-2">
              <span className="font-['Montserrat'] text-[14px] font-[700] leading-[18px] text-brand-900">
                MOST POPULAR
              </span>
            </div>
            <div className="flex w-full flex-col items-start gap-6">
              <div className="flex flex-col items-start gap-2">
                <span className="font-['Montserrat'] text-[30px] font-[700] leading-[34px] text-white -tracking-[0.025em]">
                  Professional
                </span>
                <span className="font-['Montserrat'] text-[18px] font-[400] leading-[26px] text-white -tracking-[0.01em]">
                  Ideal for growing companies with advanced payroll needs
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-['Montserrat'] text-[48px] font-[900] leading-[44px] text-white -tracking-[0.04em]">
                  $29
                </span>
                <span className="font-['Montserrat'] text-[18px] font-[400] leading-[26px] text-white -tracking-[0.01em]">
                  per month
                </span>
              </div>
            </div>
            <div className="flex w-full flex-col items-start gap-4">
              <div className="flex items-center gap-3">
                <IconWithBackground 
                  variant="success" 
                  size="small" 
                  icon={<Shield />} 
                />
                <span className="font-['Montserrat'] text-[16px] font-[500] leading-[22px] text-white">
                  Up to 50 employees
                </span>
              </div>
              <div className="flex items-center gap-3">
                <IconWithBackground 
                  variant="success" 
                  size="small" 
                  icon={<Shield />} 
                />
                <span className="font-['Montserrat'] text-[16px] font-[500] leading-[22px] text-white">
                  Advanced analytics & reporting
                </span>
              </div>
              <div className="flex items-center gap-3">
                <IconWithBackground 
                  variant="success" 
                  size="small" 
                  icon={<Shield />} 
                />
                <span className="font-['Montserrat'] text-[16px] font-[500] leading-[22px] text-white">
                  Multi-currency support
                </span>
              </div>
              <div className="flex items-center gap-3">
                <IconWithBackground 
                  variant="success" 
                  size="small" 
                  icon={<Shield />} 
                />
                <span className="font-['Montserrat'] text-[16px] font-[500] leading-[22px] text-white">
                  AI-powered insights
                </span>
              </div>
              <div className="flex items-center gap-3">
                <IconWithBackground 
                  variant="success" 
                  size="small" 
                  icon={<Shield />} 
                />
                <span className="font-['Montserrat'] text-[16px] font-[500] leading-[22px] text-white">
                  Priority support
                </span>
              </div>
            </div>
            <Button
              size="large"
              variant="neutral-secondary"
              onClick={onGetStarted}
              className="w-full mt-auto bg-white !text-black hover:bg-neutral-100"
            >
              Start Free Trial
            </Button>
          </div>

          {/* Enterprise Plan */}
          <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-start gap-8 self-stretch rounded-[32px] bg-default-background px-8 py-12">
            <div className="flex w-full flex-col items-start gap-6">
              <div className="flex flex-col items-start gap-2">
                <span className="font-['Montserrat'] text-[30px] font-[700] leading-[34px] text-default-font -tracking-[0.025em]">
                  Enterprise
                </span>
                <span className="font-['Montserrat'] text-[18px] font-[400] leading-[26px] text-subtext-color -tracking-[0.01em]">
                  Custom solutions for large organizations and enterprises
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-['Montserrat'] text-[48px] font-[900] leading-[44px] text-brand-900 -tracking-[0.04em]">
                  Custom
                </span>
                <span className="font-['Montserrat'] text-[18px] font-[400] leading-[26px] text-subtext-color -tracking-[0.01em]">
                  pricing
                </span>
              </div>
            </div>
            <div className="flex w-full flex-col items-start gap-4">
              <div className="flex items-center gap-3">
                <IconWithBackground 
                  variant="success" 
                  size="small" 
                  icon={<Shield />} 
                />
                <span className="font-['Montserrat'] text-[16px] font-[500] leading-[22px] text-default-font">
                  Unlimited employees
                </span>
              </div>
              <div className="flex items-center gap-3">
                <IconWithBackground 
                  variant="success" 
                  size="small" 
                  icon={<Shield />} 
                />
                <span className="font-['Montserrat'] text-[16px] font-[500] leading-[22px] text-default-font">
                  Custom integrations
                </span>
              </div>
              <div className="flex items-center gap-3">
                <IconWithBackground 
                  variant="success" 
                  size="small" 
                  icon={<Shield />} 
                />
                <span className="font-['Montserrat'] text-[16px] font-[500] leading-[22px] text-default-font">
                  Dedicated account manager
                </span>
              </div>
              <div className="flex items-center gap-3">
                <IconWithBackground 
                  variant="success" 
                  size="small" 
                  icon={<Shield />} 
                />
                <span className="font-['Montserrat'] text-[16px] font-[500] leading-[22px] text-default-font">
                  White-label options
                </span>
              </div>
              <div className="flex items-center gap-3">
                <IconWithBackground 
                  variant="success" 
                  size="small" 
                  icon={<Shield />} 
                />
                <span className="font-['Montserrat'] text-[16px] font-[500] leading-[22px] text-default-font">
                  24/7 phone support
                </span>
              </div>
            </div>
            <Button
              size="large"
              onClick={onGetStarted}
              className="w-full mt-auto"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="flex w-full flex-col items-center justify-center gap-12 bg-neutral-100 px-6 py-32">
        <div className="flex w-full flex-col items-center justify-center gap-6">
          <div className="flex w-full max-w-[1280px] flex-wrap items-center justify-center gap-6 mobile:flex-col mobile:flex-wrap mobile:gap-6">
            <div className="flex min-h-[384px] min-w-[240px] max-w-[384px] grow shrink-0 basis-0 flex-col items-start justify-end gap-8 self-stretch rounded-[32px] bg-default-background px-8 py-8 mobile:min-h-[384px] mobile:w-full mobile:min-w-[240px] mobile:grow mobile:shrink-0 mobile:basis-0">
              <div className="flex w-full flex-col items-start justify-center gap-4">
                <span className="max-w-[384px] whitespace-pre-wrap font-['Montserrat'] text-[30px] font-[700] leading-[34px] text-brand-900 -tracking-[0.025em]">
                  {"Stay up to date with Algopay\n"}
                </span>
                <span className="w-full max-w-[576px] whitespace-pre-wrap font-['Montserrat'] text-[18px] font-[400] leading-[26px] text-default-font -tracking-[0.01em]">
                  {
                    "Get the latest updates and news from our blockchain payroll platform.\n"
                  }
                </span>
              </div>
            </div>
            <div className="flex min-h-[384px] min-w-[320px] max-w-[1280px] grow shrink-0 basis-0 flex-col items-start justify-end gap-8 self-stretch rounded-[32px] bg-neutral-900 px-8 py-8">
              <div className="flex w-full flex-col items-start justify-center gap-4">
                <span className="max-w-[384px] whitespace-pre-wrap font-['Montserrat'] text-[30px] font-[700] leading-[34px] text-white -tracking-[0.025em]">
                  {"Be a part of something revolutionary"}
                </span>
                <span className="w-full max-w-[576px] whitespace-pre-wrap font-['Montserrat'] text-[18px] font-[400] leading-[26px] text-white -tracking-[0.01em]">
                  {
                    "Our flagship blockchain payroll platform offers the best and seamless way to way employees of all sizes."
                  }
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-full max-w-[1280px] flex-wrap items-center justify-center gap-6 mobile:flex-col mobile:flex-wrap mobile:gap-6">
            <div className="flex min-h-[384px] min-w-[240px] max-w-[384px] grow shrink-0 basis-0 flex-col items-start justify-end gap-8 self-stretch rounded-[32px] bg-default-background px-8 py-8 mobile:min-h-[384px] mobile:w-full mobile:min-w-[240px] mobile:grow mobile:shrink-0 mobile:basis-0">
              <div className="flex w-full flex-col items-start justify-center gap-4">
                <span className="max-w-[384px] whitespace-pre-wrap font-['Montserrat'] text-[30px] font-[700] leading-[34px] text-brand-900 -tracking-[0.025em]">
                  {"The trusted payroll system on the Blockchain"}
                </span>
                <span className="w-full max-w-[576px] whitespace-pre-wrap font-['Montserrat'] text-[18px] font-[400] leading-[26px] text-default-font -tracking-[0.01em]">
                  {
                    "Experience the ease with payment on the Algorand blockchain for your global payroll solution.\n"
                  }
                </span>
              </div>
            </div>
            <div className="flex min-h-[384px] min-w-[320px] max-w-[1280px] grow shrink-0 basis-0 flex-col items-start justify-end gap-8 self-stretch rounded-[32px] bg-brand-900 px-8 py-8">
              <div className="flex w-full flex-col items-start justify-center gap-4">
                <span className="max-w-[384px] whitespace-pre-wrap font-['Montserrat'] text-[30px] font-[700] leading-[34px] text-white -tracking-[0.025em]">
                  {"Algopay:\nPayroll Solution"}
                </span>
                <span className="w-full max-w-[576px] whitespace-pre-wrap font-['Montserrat'] text-[18px] font-[400] leading-[26px] text-white -tracking-[0.01em]">
                  {
                    "Discover how we aim to revolutionize global payroll, and make paying your employees seamless."
                  }
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div id="pricing-section" className="flex w-full flex-col items-center justify-center gap-6 bg-brand-900 px-6 py-32 mobile:flex">
        <div className="flex w-full max-w-[1280px] flex-col items-center justify-center gap-8 rounded-[32px] bg-default-background px-6 pt-24 pb-16">
          <div className="flex w-full flex-col items-center justify-center gap-2">
            <span className="w-full max-w-[768px] whitespace-pre-wrap font-['Montserrat'] text-[72px] font-[900] leading-[68px] text-brand-900 text-center -tracking-[0.04em] mobile:font-['Montserrat'] mobile:text-[48px] mobile:font-[900] mobile:leading-[44px] mobile:tracking-normal">
              {"START TODAY"}
            </span>
            <span className="w-full max-w-[768px] whitespace-pre-wrap font-['Montserrat'] text-[20px] font-[500] leading-[28px] text-brand-900 text-center -tracking-[0.015em]">
              {
                "Join thousands of companies using Algopay for faster, cheaper, and more secure global payroll."
              }
            </span>
          </div>
          <Button
            size="large"
            onClick={onGetStarted}
          >
            Get Started Free
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="flex w-full flex-col items-start">
        <BoldFooter />
         
      </div>
    </div>
  );
}

export default AlgopayLandingPage;
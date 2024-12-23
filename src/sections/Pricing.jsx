import { useState } from "react"
import { Element } from "react-scroll"
import { plans } from "../constants/index.jsx"
import clsx from "clsx"
import Button from "../components/Button.jsx"
import CountUp from "react-countup"
import PricingCard from "../components/PricingCard.jsx"

const Pricing = () => {

  return (
    <section>
      <Element name="pricing">
        <div className="container">
          <div className="max-w-960 pricing-head_before relative mx-auto border-l border-r border-s2 bg-s1/50 pb-40 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16">
            <h3 className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto max-w-lg text-center text-p4 max-sm:max-w-sm">
              Flexible pricing for teams of all sizes
            </h3>

            <div className="pricing-bg">
              <img
                src="/images/bg-outlines.svg"
                width={960}
                height={380}
                alt="outline"
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="outline"
                className="absolute inset-0 opacity-5 mix-blend-soft-light"
              />
            </div>
          </div>

          <div className="scroll-hide relative z-2 -mt-12 flex items-start max-xl:gap-5 max-xl:overflow-auto max-xl:pt-6">
            {plans.map((plan, index) => (
              <PricingCard key={plan.id} index={index} plan={plan} />
            ))}
          </div>
        </div>
      </Element>
    </section>
  )
}

export default Pricing

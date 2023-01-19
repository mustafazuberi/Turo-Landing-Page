import React from "react";
import "./style.css";
export default function index() {
  return (
    <>
      <div className="askedQuestions">
        <div className="left">
          <div className="accordion" id="accordionExampleY">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOneY">
                <button
                  className="accordion-button"
                  type="button"
                  data-mdb-toggle="collapse"
                  data-mdb-target="#collapseOneY"
                  aria-expanded="true"
                  aria-controls="collapseOneY"
                >
                  What do I need to book a car on Turo?
                </button>
              </h2>
              <div
                id="collapseOneY"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOneY"
                data-mdb-parent="#accordionExampleY"
              >
                <div className="accordion-body">
                  To book a car on Turo, you must create a Turo account, be 18
                  years old or older in the US, 21 years old or older in the UK,
                  23 years old or older in Canada, have a valid driver’s
                  license, and get approved to drive on Turo. When you’re
                  booking your first trip, you’ll go through a quick approval
                  process by entering your driver’s license and some other
                  information. In most cases, you’ll get approved immediately,
                  and you’ll be set for all future road trips, day trips, and
                  business trips!
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwoY">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-mdb-toggle="collapse"
                  data-mdb-target="#collapseTwoY"
                  aria-expanded="false"
                  aria-controls="collapseTwoY"
                >
                  Do I need my own insurance?
                </button>
              </h2>
              <div
                id="collapseTwoY"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwoY"
                data-mdb-parent="#accordionExampleY"
              >
                <div className="accordion-body">
                  No, you don’t need personal insurance coverage to book a car
                  on Turo.
                  <br />
                  <br />
                  In the US, any personal insurance you may have that covers
                  damage to the host’s vehicle would kick in before your Turo
                  protection plan, except in limited situations for trips booked
                  in Maryland. When booking a car in the US, you’ll choose
                  between three protection plans — Premier, Standard, or Minimum
                  — to get the level of coverage that’s right for you. With each
                  plan, you’re covered with third-party automobile liability
                  insurance provided under a policy issued to Turo by Travelers
                  Excess and Surplus Lines Company — $750,000 for the Premier
                  plan.*
                  <br />
                  <br />
                  In New York state, you’ll also choose between Premier,
                  Standard, or Minimum. With each plan, you’re covered with
                  liability insurance of $1,250,000.* Protection plans for New
                  York trips also include access to roadside assistance,
                  priority phone support, and 24/7 customer assistance.
                  <br />
                  <br />
                  When booking a car in Canada, you’ll choose between three
                  protection plans — Premier, Standard, or Minimum — and with
                  each plan, you’re covered with liability insurance purchased
                  from Intact Financial Corporation in Alberta, Nova Scotia,
                  Ontario, and Quebec, and Insurance Corporation of British
                  Columbia (ICBC) in British Columbia — up to $2,000,000 for all
                  plans.**
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThreeY">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-mdb-toggle="collapse"
                  data-mdb-target="#collapseThreeY"
                  aria-expanded="false"
                  aria-controls="collapseThreeY"
                >
                  Can other people drive a car that I booked?
                </button>
              </h2>
              <div
                id="collapseThreeY"
                className="accordion-collapse collapse"
                aria-labelledby="headingThreeY"
                data-mdb-parent="#accordionExampleY"
              >
                <div className="accordion-body">
                  Yes, multiple guests can drive the car you book on Turo, as
                  long as they are all approved to drive. The primary driver
                  (whoever booked the car) can add additional drivers with no
                  fees or additional charges. Only the primary driver can
                  request to add drivers; Turo hosts cannot do it for you. We
                  encourage you to request to add additional drivers before your
                  trip starts, though guests in the US and Canada can request to
                  add a driver while a trip is in progress.
                  <br />
                  <br />
                  To speed up the process, have your additional driver create a
                  Turo account and get approved to drive before you request to
                  add them. All drivers must have a valid driver’s license and
                  meet the age requirements for the car you’ve booked. You can
                  request to add drivers via the “Trips” tab in the Turo app
                  without additional driver charges or extra costs.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFourY">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-mdb-toggle="collapse"
                  data-mdb-target="#collapseFourY"
                  aria-expanded="false"
                  aria-controls="collapseFourY"
                >
                  What is the cancellation policy on Turo?
                </button>
              </h2>
              <div
                id="collapseFourY"
                className="accordion-collapse collapse"
                aria-labelledby="headingFourY"
                data-mdb-parent="#accordionExampleY"
              >
                <div className="accordion-body">
                  You can cancel and get a full refund up to 24 hours before
                  your trip starts. If you book a trip with less than 24 hours’
                  notice, you have one hour after booking to cancel free of
                  charge. If you cancel after the free cancellation period ends,
                  you will be charged a small cancellation fee.
                  <br />
                  <br />
                  In the rare event a host cancels, you’ll be notified
                  immediately so you can book another car, or we’ll help you
                  find one. Your refund can be temporarily held to expedite
                  rebooking, or the funds can be returned to your bank account —
                  your choice.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /////////////////////////////////////////////////////////// */}
        <div className="right">
          <div className="accordion" id="accordionExampleY">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOneY">
                <button
                  className="accordion-button"
                  type="button"
                  data-mdb-toggle="collapse"
                  data-mdb-target="#collapseOneY1"
                  aria-expanded="true"
                  aria-controls="collapseOneY"
                >
                  What happens if I have an accident?
                </button>
              </h2>
              <div
                id="collapseOneY1"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOneY"
                data-mdb-parent="#accordionExampleY"
              >
                <div className="accordion-body">
                  If there’s an emergency or an issue with the car, call our
                  emergency roadside assistance provider, available 24/7. We’ll
                  make sure you’re safe, then help you get back on your way.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwoY2">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-mdb-toggle="collapse"
                  data-mdb-target="#collapseTwo2"
                  aria-expanded="false"
                  aria-controls="collapseTwoY"
                >
                  Can I get my car delivered to me?
                </button>
              </h2>
              <div
                id="collapseTwo2"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwoY"
                data-mdb-parent="#accordionExampleY"
              >
                <div className="accordion-body">
                  Yes, many hosts offer delivery to travel hubs like airports,
                  train stations, and hotels, or to custom delivery locations.
                  There are cars available on Turo at convenient locations near
                  hundreds of airports. Skip the rental counter and have your
                  car delivered for pickup and return at your hotel or vacation
                  rental, or nearby location, to save time and hassle on your
                  weekend getaway or family vacation. Some hosts offer free
                  delivery, while others set their own delivery fee. overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree2">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-mdb-toggle="collapse"
                  data-mdb-target="#collapseThree3"
                  aria-expanded="false"
                  aria-controls="collapseThreeY"
                >
                  How do I get discounts when booking a car?
                </button>
              </h2>
              <div
                id="collapseThree3"
                className="accordion-collapse collapse"
                aria-labelledby="headingThreeY"
                data-mdb-parent="#accordionExampleY"
              >
                <div className="accordion-body">
                  Many Turo hosts offer discounted prices for weekly and monthly
                  trips, as well as “early bird” discounts for trips booked a
                  week or more in advance. Get the best deals and lowest rates
                  possible on everything from cars to SUVs by booking longer
                  trips, at least a week in advance.*
                  <br />
                  <br />
                  On your Account page, make sure you’ve checked the box to
                  receive email notifications, and enable push notifications
                  from the Turo app in your phone settings — we’ll send you
                  occasional promo codes, discounts, and deals!
                  <br />
                  <br />
                  <span style={{ color: "#593cfb" }}>
                    *See more about promotions & discounts
                  </span>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFourY">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-mdb-toggle="collapse"
                  data-mdb-target="#collapseFourY4"
                  aria-expanded="false"
                  aria-controls="collapseFourY"
                >
                  What are the cleaning and safety policies on Turo?{" "}
                </button>
              </h2>
              <div
                id="collapseFourY4"
                className="accordion-collapse collapse"
                aria-labelledby="headingFourY"
                data-mdb-parent="#accordionExampleY"
              >
                <div className="accordion-body">
                  Under the enhanced cleaning policy, hosts are required to
                  clean and disinfect their vehicles thoroughly before every
                  trip, so you can feel safe and comfortable behind the wheel.
                  Turo hosts have access to training materials on enhanced
                  safety measures and cleaning practices to help prevent the
                  spread of COVID-19 or other viruses.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

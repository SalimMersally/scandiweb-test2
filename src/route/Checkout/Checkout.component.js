import { Checkout as SourceCheckout } from "SourceRoute/Checkout/Checkout.component";
import { ContentWrapper as SourceContentWrapper } from "SourceComponent/ContentWrapper/ContentWrapper.component";
import CheckoutStep from "Component/CheckoutStep";

export class Checkout extends SourceCheckout {
  steps = [
    { step: "SHIPPING_STEP", name: "Shipping" },
    { step: "BILLING_STEP", name: "Review & Payments" },
    { step: "DETAILS_STEP", name: "" },
  ];

  render() {
    return (
      <main block="Checkout">
        <CheckoutStep steps={this.steps} current={this.props.checkoutStep} />
        <SourceContentWrapper
          wrapperMix={{ block: "Checkout", elem: "Wrapper" }}
          label={__("Checkout page")}
        >
          {this.renderSummary(true)}
          <div block="Checkout" elem="Step">
            {this.renderTitle()}
            {this.renderGuestForm()}
            {this.renderStep()}
            {this.renderLoader()}
          </div>
          <div>
            {this.renderSummary()}
            {this.renderPromo()}
            {this.renderCoupon()}
          </div>
        </SourceContentWrapper>
      </main>
    );
  }
}

export default Checkout;

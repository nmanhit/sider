import { MobileButton } from "./index.ts";
import { storiesOf } from "@storybook/web-components";

storiesOf("mobile/button", module)
  .addParameters({ viewport: { defaultViewport: "iPhone11Pro" } })
  .add("Base", () => {
    const root = document.createElement("div");
    const normalButton = new MobileButton({
      className: "sample-class",
      id: "sample-id",
      visible: true,
      disabled: false
    });

    normalButton.addEventListener("click", event => {
      console.log(["clickEvent", event]);
    });

    const disableNormalButton = new MobileButton({
      className: "sample-class",
      text: "Normal",
      id: "sample-id",
      visible: true,
      disabled: true
    });

    disableNormalButton.addEventListener("click", event => {
      console.log(["clickEvent", event]);
    });

    const submitButton = new MobileButton({
      text: "Submit",
      type: "submit",
      visible: true,
      disabled: false
    });

    submitButton.addEventListener("click", event => {
      console.log(["clickEvent", event]);
    });

    const disableSubmitButton = new MobileButton({
      text: "Submit",
      type: "submit",
      visible: true,
      disabled: true
    });

    disableSubmitButton.addEventListener("click", event => {
      console.log(["clickEvent", event]);
    });

    root.appendChild(normalButton);
    root.appendChild(disableNormalButton);
    root.appendChild(submitButton);
    root.appendChild(disableSubmitButton);
    return root;
  })
  // UI For document site. Do not change or delete below.
  .add("Document", () => {
    const root = document.createElement("div");
    const mobileButtonNormal = new MobileButton({
      text: "Normal",
      type: "normal",
      className: "kuc_normal_button"
    });
    mobileButtonNormal.style.margin = "0px 5px 0px 0px";

    const mobileButtonSubmit = new MobileButton({
      text: "Submit",
      type: "submit",
      className: "kuc_submit_button"
    });
    root.appendChild(mobileButtonNormal);
    root.appendChild(mobileButtonSubmit);
    return root;
  });

import { RadioButton } from "./index.ts";
import { storiesOf } from "@storybook/web-components";

storiesOf("radio-button", module)
  .add("Base", () => {
    const root = document.createElement("div");
    const radioButton = new RadioButton({
      items: [
        {
          label: "Item 1",
          value: "item-1"
        },
        {
          label: "Item 2",
          value: "item-2"
        },
        {
          label: "Item 3",
          value: "item-3"
        }
      ],
      value: "item-2",
      className: "sample-class",
      id: "sample-id",
      visible: true,
      disabled: false,
      borderVisible: true,
      itemLayout: "vertical",
      label: "Radio button",
      requiredIcon: true,
      error: "Error occurred!"
    });
    radioButton.addEventListener("change", function(event) {
      console.log(event.detail);
    });
    root.appendChild(radioButton);
    return root;
  })
  .add("Base2", () => {
    const root = document.createElement("div");
    const radioButton = new RadioButton({
      items: [
        {
          label: "Item 1",
          value: "item-1"
        },
        {
          label: "Item 2",
          value: "item-2"
        },
        {
          label: "Item 3",
          value: "item-3"
        }
      ],
      value: "item-2",
      className: "sample-class",
      id: "sample-id",
      visible: true,
      disabled: true,
      borderVisible: true,
      itemLayout: "vertical",
      label: "Radio button",
      requiredIcon: true,
      error: "Error occurred!"
    });
    radioButton.addEventListener("change", function(event) {
      console.log(event.detail);
    });
    root.appendChild(radioButton);
    return root;
  })
  .add("Base3", () => {
    const root = document.createElement("div");
    const radioButton = new RadioButton({
      items: [
        {
          label: "Item 1",
          value: "item-1"
        },
        {
          label: "Item 2",
          value: "item-2"
        },
        {
          label: "Item 3",
          value: "item-3"
        }
      ],
      value: "",
      className: "sample-class",
      id: "sample-id",
      visible: true,
      disabled: false,
      borderVisible: true,
      itemLayout: "horizontal",
      label: "Radio button",
      requiredIcon: true,
      error: "Error occurred!"
    });
    radioButton.addEventListener("change", function(event) {
      console.log(event.detail);
    });
    root.appendChild(radioButton);
    return root;
  })
  .add("Base4", () => {
    const root = document.createElement("div");
    const radioButton = new RadioButton({
      items: [
        {
          label: "Item 1",
          value: "item-1"
        },
        {
          label: "Item 2",
          value: "item-2"
        },
        {
          label: "Item 3",
          value: "item-3"
        },
        {
          label: "Item 3",
          value: "item-3"
        }
      ],
      value: "item-2",
      className: "sample-class",
      id: "sample-id",
      visible: true,
      disabled: false,
      borderVisible: true,
      itemLayout: "",
      label: "Radio Button",
      requiredIcon: true,
      error: "Error occurred!"
    });
    radioButton.addEventListener("change", function(event) {
      console.log(event.detail);
    });
    root.appendChild(radioButton);
    return root;
  })
  // UI For document site. Do not change or delete below.
  .add("Document", () => {
    const root = document.createElement("div");
    const radioButton = new RadioButton({
      value: "Orange",
      items: [
        {
          label: "orange",
          value: "Orange"
        },
        {
          label: "apple",
          value: "Apple"
        }
      ]
    });
    root.appendChild(radioButton);
    return root;
  });

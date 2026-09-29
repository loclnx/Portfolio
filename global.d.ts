import messages from "./messages/en.json";

type Messages = typeof messages;

declare global {
  // This is next-intl's supported module-augmentation pattern for typed message keys.
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface IntlMessages extends Messages {}
}

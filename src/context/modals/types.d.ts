export type initialValue = {
  updateModal(value: { key: string; value: boolean }): void;
  modals: Modals;
};

export type Modals = {
  authentication: boolean;
  authenticationConfirmCode: boolean;
  registration: boolean;
  registrationConfirmCode: boolean;
};

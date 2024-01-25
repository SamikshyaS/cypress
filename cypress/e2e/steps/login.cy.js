import {
  Given,
  When,
  Then,
  And,
} from "@badeball/cypress-cucumber-preprocessor";
import SendMessage from "../Pages/sendMessage";
import "cypress-file-upload";
//Login and naviagte to the send message modal
Given("User is in the Send message modal", () => {
  cy.login();
  SendMessage.clickOnText("Celebration & Recognition");
  SendMessage.selectFirstItem();
  SendMessage.selectGroup();
  SendMessage.enterSubject("Welcome to the Team ");
});

//Enter the body contain using bold itaic and underline using shortcut
When(
  "User enters the content using combination of bold italic and underline",
  () => {
    cy.get(
      'div[class="textarea-wrapper textarea-wrapper--modal-textarea p--0"]'
    ).type(
      "{ctrl+B} Dear Team Member, {enter} {ctrl+b} {ctrl+I} I would like to welcome you to the team. {enter} {ctrl+U} Regards, {enter} Demo Nurse {ctrl+u} {ctrl+I}"
    );
  }
);

Then("The content should be shown in the email body", () => {
  cy.get(
    'div[class="textarea-wrapper textarea-wrapper--modal-textarea p--0"]'
  ).type("{enter} Hope to see you soon");
});

Then("User clicks on insert link icon", () => {
  cy.get('span[class="font-option font-size cursor--pointer"]').click();
});

Then("User clicks on Text size icon and select the first option", () => {
  cy.get('div[class="dropdown-menu font-size"]').find("li").first().click();
});

Then("User should be able to type the content with that specific size", () => {
  cy.get('div[class="content-editable__root"]').type(
    "{enter} \n this is the text with the text size 8"
  );
});

Then("User should be unselect the toolbar", () => {
  cy.get(".toolbar-item-wrapper > :nth-child(1)").click();
  cy.get(".toolbar-item-wrapper > :nth-child(2)").click();
  cy.get(".toolbar-item-wrapper > :nth-child(3)").click();
  cy.get('div[class="content-editable__root"]').type(
    "{enter} \n This is the new text after deselect"
  );
});

Then("User clicks on insert link icon", () => {
  cy.get('div[class="content-editable__root"]').click();
  cy.get('div[class="input-link-wrapper"]').click();
  cy.get(
    'input[class="form-input form-input--survey form-input--lg mb--15"]'
  ).type("Click here to search google");
  cy.get('input[class="form-input form-input--survey form-input--lg"]').type(
    "www.google.com"
  );
  cy.get('button[class="btn"]').click();
});

//select the pdf
Then("User should be able to upload the attachment", () => {
  cy.get("#sendEmailForm-attach").attachFile("sample.pdf");
});

//Navigate to SendMessageModal
class SendMessage {
  elements = {
    celebrationAndRecognizationDropdown: () => cy.get("#actionItemDropdownId"),
    selectGroupButton: () =>
      cy.get(
        'button[class="ml--10 flex--center line-height--18 modal-action-item"]'
      ),
    employeeGroupDropdown: () => cy.get("#employee-group-dropdown-scrollbar"),
    subjectField: () =>
      cy.get(
        'input[class="form-input--lg border--none border-radius--0 border-bottom--input-field form-input"]'
      ),
  };

  clickOnText(text) {
    cy.contains(text).click();
  }

  selectFirstItem() {
    this.elements
      .celebrationAndRecognizationDropdown()
      .find("li")
      .first()
      .click();
  }

  selectGroup() {
    this.elements.selectGroupButton().click();
    this.elements.employeeGroupDropdown().find("li").first().click();
  }

  enterSubject(subject) {
    this.elements.subjectField().type(subject);
  }
}

export default new SendMessage();

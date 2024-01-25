Feature: Send message modal


@boldItalicUnderline
#Bold, Italic and Underline using shortcut key
Scenario: User should be able to add the content using combination of bold, italic and underline
Given User is in the Send message modal
When User enters the content using combination of bold italic and underline
Then The content should be shown in the email body

# Text size

@textSize
Scenario: User should be able to type the content with different text size
Given User is in the Send message modal      
When User clicks on Text size icon and select the first option
Then User should be able to type the content with that specific size

@insertLink
# Insert link
Scenario: User should be able to insert the link in the body
Given User is in the Send message modal
When User clicks on insert link icon
Then Enters the Text to Display and valid web address
Then Clicks on Save
Then The text with the inserted link shold be added in the body template

@addAttachment
# //npx cypress run -e TAGS='@insertLink'
# Add attachment         
Scenario: User should be able to add the attachment
Given User is in the Send message modal
When User clicks on add attachment icon and choose the attachment
Then The attachment should be added in the body

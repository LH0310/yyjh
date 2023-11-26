import schema2component from "@/utils/schema2component";

const schema = {
    "type": "page",
    "body": {
      "type": "form",
      "api": "/path/to/submit",
      "body": [
        {
          "type": "radios",
          "name": "choice1",
          "label": "选择1",
          "options": [
            {
              "label": "选项A",
              "value": "A"
            },
            {
              "label": "选项B",
              "value": "B"
            }
          ],
          "onChange": "updateChoices"
        },
        {
          "type": "radios",
          "name": "choice2",
          "label": "选择2",
          "options": [
            {
              "label": "选项C",
              "value": "C"
            },
            {
              "label": "选项D",
              "value": "D"
            }
          ],
          "onChange": "updateChoices"
        },
        {
          "type": "hidden",
          "name": "combinedChoices"
        }
      ],
      "script": `
        function updateChoices() {
          var choice1 = this.props.form.getItemByName('choice1').getValue();
          var choice2 = this.props.form.getItemByName('choice2').getValue();
          this.props.form.setItemValue('combinedChoices', [choice1, choice2].filter(Boolean));
        }
      `
    }
  }
  
  

export default schema2component(schema);
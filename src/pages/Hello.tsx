import schema2component from "@/utils/schema2component";

const schema = {
  "type": "page",
  "body": {
    "type": "crud",
    "syncLocation": false,
    "api": "/amis/api/mock2/sample",
    "headerToolbar": [
      "export-excel"
    ],
    "columns": [
      {
        "name": "id",
        "label": "ID"
      },
      {
        "name": "engine",
        "label": "Rendering engine"
      },
      {
        "name": "browser",
        "label": "Browser"
      },
      {
        "name": "platform",
        "label": "Platform(s)"
      },
      {
        "name": "version",
        "label": "Engine version"
      },
      {
        "name": "grade",
        "label": "CSS grade",
        "type": "mapping",
        "map": {
          "*": "<span class=\"label label-info\">${grade}</span>"
        }
      }
    ]
  }
}
  
  

export default schema2component(schema);
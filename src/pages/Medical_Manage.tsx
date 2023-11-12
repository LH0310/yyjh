import schema2component from "@/utils/schema2component";

const schema = {
    "type": "page",
    "title": "药物管理",
    "name":"medical_manage",
    "body": {
        "label": "弹框",
        "type": "button",
        "actionType": "dialog",
        "dialog": {
            "title": "弹框",
            "body": "这是个简单的弹框。"
        }
    }
}

export default schema2component(schema);
import schema2component from "@/utils/schema2component";

const schema ={
    "type": "page",
    "remark": null,
    "name": "page-demo",
    "body": [
    {
        "type": "form",
        "title": "",
        "columnCount": 3,
        "resetAfterSubmit": true,
        "api": {
            "method": "post",
            "url": "http://127.0.0.1:4523/m1/3496157-0-default/admin/into/grade"
        },
        "body": [
            {
                "name": "food",
                "type": "select",
                "placeholder": "请选择",
                "label": "进食：指用餐具将食物由容器送到口中口咀嚼、吞咽等过程",
                "options": [
                    {
                        "label": "10分，独立进食(在合理的时间内独立进食准备好的食物)",
                        "value": "10"
                    },
                    {
                        "label": "5分，需部分帮助(进食过程中需要一定帮助，如协助把持餐具)",
                        "value": "5"
                    },
                    {
                        "label": "0分，需极大帮助或完全依赖他人，或有留置胃管",
                        "value": "0"
                    }
                ]
            },
            {
                "name": "shower",
                "type": "select",
                "placeholder": "请选择",
                "label": "洗澡",
                "options": [
                    {
                        "label": "5分，准备好洗澡水后，可自己独立完成洗澡过程",
                        "value": "5"
                    },
                    {
                        "label": "0分，在洗澡过程中需他人帮助",
                        "value": "0"
                    }
                ]
            },
            {
                "name": "washing",
                "type": "select",
                "placeholder": "请选择",
                "label": "修饰：指洗臉、刷牙、梳头、刮胡子等",
                "options": [
                    {
                        "label": "5分，可自己独立完成",
                        "value": "5"
                    },
                    {
                        "label": "0分，需他人帮助",
                        "value": "0"
                    }
                ]
            },
            {
                "name": "dressing",
                "type": "select",
                "placeholder": "请选择",
                "label": "穿衣：指穿脱衣服、系扣、拉拉链、穿脱鞋袜、系鞋带等",
                "options": [
                    {
                        "label": "10分，可独立完成",
                        "value": "10"
                    },
                    {
                        "label": "5分，需部分帮助(能自己穿脱，但需他人帮助整理衣物、系扣/鞋带、拉拉链)",
                        "value": "5"
                    },
                    {
                        "label": "0分，需极大帮助或完全依赖他人",
                        "value": "0"
                    }
                ]
            },
            {
                "name": "poo",
                "type": "select",
                "placeholder": "请选择",
                "label": "大便控制",
                "options": [
                    {
                        "label": "10分，可控制大便",
                        "value": "10"
                    },
                    {
                        "label": "5分，偶尔失控(每周<1次)或需要他人提示",
                        "value": "5"
                    },
                    {
                        "label": "0分，完全失控",
                        "value": "0"
                    }
                ]
            },
            {
                "name": "pee",
                "type": "select",
                "placeholder": "请选择",
                "label": "小便控制",
                "options": [
                    {
                        "label": "10分，可控制小便",
                        "value": "10"
                    },
                    {
                        "label": "5分，偶尔失控(每天<1次，每周>1次)或需要他人提示",
                        "value": "5"
                    },
                    {
                        "label": "0分，完全失控或留置导尿管",
                        "value": "0"
                    }
                ]
            },
            {
                "name": "toilet",
                "type": "select",
                "placeholder": "请选择",
                "label": "如厕：包括去厕所、解开衣裤、擦净、整理衣裤、冲水",
                "options": [
                    {
                        "label": "10分，可独立完成",
                        "value": "10"
                    },
                    {
                        "label": "5分，需部分帮助(需他人搀扶去厕所、需他人帮忙冲水或整理衣裤等)",
                        "value": "5"
                    },
                    {
                        "label": "0分，需极大帮助或完全依赖他人",
                        "value": "0"
                    }
                ]
            },
            {
                "name": "move",
                "type": "select",
                "placeholder": "请选择",
                "label": "床椅转移",
                "options": [
                    {
                        "label": "15分，可独立完成",
                        "value": "15"
                    },
                    {
                        "label": "10分，需部分帮助(需他人搀扶或使用拐杖)",
                        "value": "10"
                    },
                    {
                        "label": "5分，需极大帮助(较大程度上依赖他人搀扶和帮助)",
                        "value": "5"
                    },
                    {
                        "label": "0分，完全依赖他人",
                        "value": "0"
                    }
                ]
            },
            {
                "name": "walk",
                "type": "select",
                "placeholder": "请选择",
                "label": "平地行走",
                "options": [
                    {
                        "label": "15分，可独立在平地上行走45米",
                        "value": "15"
                    },
                    {
                        "label": "10分，需部分帮助(因肢体残疾、平衡能力差、过度虚弱、视力等问题，在一定程度上需他人搀扶或使用拐杖、助行器等工具)",
                        "value": "10"
                    },
                    {
                        "label": "5分，需极大帮助(较大程度上依赖他人搀扶和帮助)",
                        "value": "5"
                    },
                    {
                        "label": "0分，完全依赖他人",
                        "value": "0"
                    }
                ]
            }
        ]
    }
]
}
export default schema2component(schema);
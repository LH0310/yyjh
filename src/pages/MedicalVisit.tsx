import schema2component from "@/utils/schema2component";

const schema = {
  type: "page",
  title: "就诊记录",
  body: {
    type: "crud",
    api: "/admin/medicalVisit/lists",
    headerToolbar: [
      {
        type: "export-excel",
        label: "只导出 engine 和  browser 列",
        columns: ["visitId", "name"],
      },
      {
        label: "新增",
        type: "button",
        actionType: "dialog",
        level: "primary",
        dialog: {
          title: "新增",
          body: {
            type: "form",
            name: "form",
            api: {
              method: "post",
              url: "/admin/medicalVisit",
            },
            data: {},
            body: [
              {
                type: "input-text",
                label: "老人姓名",
                id: "name0",
                name: "name",
                addOn: {
                  type: "button",
                  label: "选择老人",
                  level: "info",
                  actionType: "dialog",
                  dialog: {
                    title: "选择老人",
                    size: "lg",
                    id: "elderlySelectDialog",
                    actions: [],
                    body: {
                      type: "crud",
                      api: "/admin/baseinfo/page",
                      checkOnItemClick: true,
                      columns: [
                        {
                          name: "name",
                          label: "姓名",
                        },
                        {
                          name: "id",
                          label: "ID",
                        },
                        {
                          name: "phone",
                          label: "电话",
                        },
                      ],
                      onEvent: {
                        rowClick: {
                          close: true,
                          actions: [
                            {
                              actionType: "toast",
                              args: {
                                msgType: "info",
                                msg: "行单击数据：${event.data.item|json}；行索引：${event.data.item.name}",
                              },
                            },
                            {
                              actionType: "setValue",
                              args: {
                                value: "${event.data.item}",
                              },
                              componentName: "form",
                            },
                            {
                              actionType: "setValue",
                              args: {
                                value: "${event.data.item.id}",
                              },
                              componentId: "elderlyId",
                            },
                            {
                              actionType: "cancel",
                              componentId: "elderlySelectDialog",
                            },
                          ],
                        },
                      },
                    },
                  },
                },
              },
              {
                type: "input-datetime",
                name: "visitTime",
                label: "就诊时间",
                format: "YYYY-MM-DD HH:mm:ss",
                required: true,
              },
              {
                type: "hidden",
                name: "elderlyId", // 隐藏字段，用于保存老人ID
                id: "elderlyId",
              },
              {
                type: "input-text",
                name: "accompanyingPerson",
                label: "陪同人员",
              },
              {
                type: "input-text",
                name: "doctorName",
                label: "医生姓名",
              },
              {
                type: "select",
                name: "isOutstandingPayment",
                label: "是否有未结账款",
                options: [
                  { label: "是", value: 1 },
                  { label: "否", value: 0 },
                ],
                required: true,
              },
              {
                type: "textarea",
                name: "diagnosisResult",
                label: "诊断结果",
              },
              {
                type: "select",
                name: "visitType",
                label: "就诊类型",
                options: [
                  { label: "住院", value: "Inpatient" },
                  { label: "门诊", value: "Outpatient" },
                ],
                required: true,
              },
              {
                type: "textarea",
                name: "remarks",
                label: "备注",
              },
            ],
          },
        },
        id: "u:b5b400a07950",
      },
      "bulkActions",
    ],
    filter: {
      debug: true,
      title: "搜索",
      body: {
        type: "input-text",
        name: "elderlyName",
        label: "老人姓名",
        clearable: true,
        size: "sm",
      },
      actions: [
        {
          type: "reset",
          label: "重置",
        },
        {
          type: "submit",
          level: "primary",
          label: "查询",
        },
      ],
    },
    columns: [
      {
        name: "visitId",
        label: "就诊记录ID",
      },
      {
        name: "name",
        label: "老人姓名",
      },
      {
        name: "visitTime",
        label: "就诊时间",
      },
      {
        type: "operation",
        label: "操作",
        buttons: [
          {
            label: "详情",
            type: "button",
            level: "link",
            actionType: "dialog",
            dialog: {
              title: "查看详情",
              body: {
                initApi: {
                  method: "get",
                  url: "/admin/medicalVisit",
                  // 这里假设您的API需要就诊记录的ID来获取详情
                  data: {
                    visitId: "${visitId}",
                  },
                },
                type: "form",
                // 在这里添加 api 属性来获取详细信息
                body: [
                  {
                    type: "static",
                    name: "visitId",
                    label: "就诊记录ID",
                  },
                  {
                    type: "static",
                    name: "name",
                    label: "老人姓名",
                  },
                  {
                    type: "static",
                    name: "visitTime",
                    label: "就诊时间",
                  },
                  {
                    type: "static",
                    name: "accompanyingPerson",
                    label: "陪同人员",
                  },
                  {
                    type: "static",
                    name: "doctorName",
                    label: "医生姓名",
                  },
                  {
                    type: "static",
                    name: "isOutstandingPayment",
                    label: "是否有未结账款",
                    map: {
                      1: "是",
                      0: "否",
                    },
                  },
                  {
                    type: "static",
                    name: "diagnosisResult",
                    label: "诊断结果",
                  },
                  {
                    type: "static",
                    name: "visitType",
                    label: "就诊类型",
                  },
                  {
                    type: "static",
                    name: "remarks",
                    label: "备注",
                  },
                ],
              },
            },
          },
          {
            label: "删除",
            type: "button",
            actionType: "ajax",
            level: "danger",
            confirmText: "确认要删除？",
            api: "delete:/admin/medicalVisit/${visitId}",
          },
        ],
      },
    ],
  },
};

export default schema2component(schema);

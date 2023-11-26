module.exports = () => {
  return {
    status: 0,
    data: [
      {
        label: "导航",
        children: [
          {
            path: "/medicalVisit",
            label: "就诊记录",
          },
          {
            path:"/medical_manage",
            label:"药物管理"

          },{
            path:"/expenses_manage",
            label:"费用管理"
          },
          {
            path:"/New_Register",
            label:"新增用户登记"
          },
          {
            path:"/Elder_List",
            label:"已入住老人列表"
          },
          {
            label: "能力评估",
            icon: "fa fa-user",
            children: [
              {
                label: "新增能力评估",
                path: "/Ability_Evaluation",
              },
              {
                label: "能力评估记录",
                path: "/Ability_List",
              },
              {
                label: "能力评估表",
                path: "/Ability_Grade",
              },
            ],
          },
          // {
          //   path: "/dashboard",
          //   label: "Dashboard",
          //   icon: "fa fa-gauge",
          // },
          // {
          //   path: "/hello",
          //   label: "hello",
          //   icon: "fa fa-user",
          // },
          // {
          //   path: "/dialog/simple",
          //   label: "Dialog",
          //   icon: "fa fa-bomb",
          // },
          // {
          //   label: "会员管理",
          //   icon: "fa fa-user",
          //   children: [
          //     {
          //       label: "列表",
          //       path: "/customer/index",
          //     },
          //   ],
          // },
          // {
          //   label: "选项卡",
          //   icon: "fa fa-clone",
          //   children: [
          //     {
          //       label: "常规选项卡",
          //       path: "/tabs",
          //     },
          //   ],
          // },
          // {
          //   path: "/icon/simple",
          //   label: "Icon",
          //   icon: "fa fa-th",
          // },
          // {
          //   path: "/horizontal",
          //   label: "排版",
          //   icon: "fa fa-grip",
          // },
          // {
          //   label: "表单页面",
          //   icon: "fas fa-pen-to-square",
          //   children: [
          //     {
          //       label: "常规表单",
          //       children: [
          //         {
          //           label: "常规表单",
          //           path: "/form/basic",
          //         },
          //         {
          //           label: "三级目录测试",
          //           path: "/form/basic/advanced",
          //         },
          //       ],
          //     },
          //     {
          //       label: "复杂表单",
          //       path: "/form/advanced",
          //     },
          //     {
          //       label: "向导",
          //       path: "/form/wizard",
          //     },
          //     {
          //       label: "代码编辑器",
          //       path: "/form/editor",
          //     },
          //   ],
          // },
          // {
          //   label: "SchemaApi",
          //   icon: "fa fa-th",
          //   children: [
          //     {
          //       path: "/schemaApi/demo1",
          //       label: "渲染接口amis",
          //       icon: "fa fa-th",
          //     },
          //   ],
          // },
        ],
      },
    ],
  };
};

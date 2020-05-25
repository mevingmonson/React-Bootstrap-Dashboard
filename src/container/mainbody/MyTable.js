import React from "react";
import MaterialTable from "material-table";

export default function MyTable() {
  const [state, setState] = React.useState({
    columns: [
      { title: "Task", field: "task" },
      { title: "Owner", field: "owner" },
      {
        title: "Status",
        field: "status",
        lookup: {
          10: "Working on it",
          20: "Stuck",
          30: "Done",
          40: "Critical",
        },
      },
      { title: "Due Date", field: "duedate", type: "date" },
    ],
    data: [
      {
        task: "UI Development",
        owner: "Mevin",
        status: 30,
        duedate: "",
      },
    ],
  });
  console.log(state.data);
  return (
    <MaterialTable
      title="Things To Do"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}

//   return (
//     <MaterialTable
//       columns={[
//         { title: "Adı", field: "name" },
//         { title: "Soyadı", field: "surname" },
//         { title: "Doğum Yılı", field: "birthYear", type: "numeric" },
//         {
//           title: "Doğum Yeri",
//           field: "birthCity",
//           lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
//         },
//       ]}
//       data={[
//         { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
//       ]}
//       title="Demo Title"
//     />
//   );
// }

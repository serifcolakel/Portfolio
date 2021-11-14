import Head from "next/head";
import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import { FaFileImport } from "react-icons/fa";

const total = [
  { label: "Task Name", inputProps: "", type: "text", name: "taskName" },
  {
    label: "Material Budged",
    inputProps: "$",
    type: "number",
    name: "materialBudged",
  },
  {
    label: "Labour Budget",
    inputProps: "$",
    type: "number",
    name: "labourBudget",
  },
  {
    label: "Equiptment Budget",
    inputProps: "$",
    type: "number",
    name: "equipmantBudget",
  },
  {
    label: "Budgeted Cost",
    inputProps: "$",
    type: "number",
    name: "totalBudget",
  },
];
const totalMaterials = [
  { label: "Item", inputProps: "", type: "text" },
  { label: "Currency", inputProps: "$", type: "number" },
  { label: "Unit", inputProps: "$", type: "number" },
  { label: "Quantity", inputProps: "$", type: "number" },
  { label: "Unit Cost", inputProps: "$", type: "number" },
  { label: "Mark Up", inputProps: "$", type: "number" },
  { label: "Total Cost", inputProps: "$", type: "number" },
];

export default function EstimationTasks() {
  const [inputs, setInputs] = React.useState({
    materialBudged: 0,
    labourBudget: 0,
    equipmantBudget: 0,
    totalBudget: 0,
    taskName: "",
  });
  React.useEffect(() => {
    let total =
      parseFloat(inputs.materialBudged) +
      parseFloat(inputs.labourBudget) +
      parseFloat(inputs.equipmantBudget);
    setInputs({ ...inputs, totalBudget: total.toFixed(2) });
  }, [inputs.materialBudged, inputs.labourBudget, inputs.equipmantBudget]);

  const handleChange = (e) => {
    const value = e.target.value;
    console.log(e.target.value, e.target.name);
    setInputs((values) => ({ ...values, [e.target.name]: value }));
  };
  console.log(inputs);
  return (
    <div className="flex flex-col gap-8-4 w-[1330px] mx-auto items-center justify-center ">
      <Head>
        <title>About Me - Serif Colakel Portfolio</title>
      </Head>
      <div className="flex w-full justify-between items-center  p-4">
        <h1 className="font-bold text-2xl">Estimation Tasks{"(0)"}</h1>
        <Button className="pl-8 pr-8 rounded-lg" variant="contained">
          New Task
        </Button>
      </div>

      <div className="grid grid-cols-6 gap-8 gap-8-4 items-center justify-center bg-et-top p-4 rounded-lg">
        {total.map((tot, i) => (
          <div
            key={i}
            className={
              i === 0
                ? "col-span-2 bg-primary-white rounded-lg"
                : "bg-primary-white rounded-lg"
            }
          >
            <Box component="form" noValidate autoComplete="off">
              <TextField
                fullWidth
                label={tot.label}
                name={tot.name}
                type={tot.type}
                value={inputs[tot.name]}
                id="outlined-start-adornment"
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {tot.inputProps}
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </div>
        ))}
      </div>

      <div className="w-[1330px] p-4">
        <div className="w-[1300px] px-8 divide-y-2 object-cover bg-et-bottom1">
          <div className="flex justify-between items-center  p-4">
            <h1 className="font-bold">Materials</h1>
            <div className="flex gap-x-2">
              <Button
                className="pl-8 pr-8 rounded-lg bg-primary-green gap-x-2"
                variant="contained"
              >
                <FaFileImport />
                Import
              </Button>
              <Button className="pl-8 pr-8 rounded-lg " variant="contained">
                New Task
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-8 gap-8  items-center justify-center p-4">
            {totalMaterials.map((tot, i) => (
              <div
                key={i}
                className={
                  i === 0
                    ? " col-span-2 bg-primary-white rounded-lg"
                    : "bg-primary-white rounded-lg"
                }
              >
                <Box component="form" noValidate autoComplete="off">
                  <TextField
                    fullWidth
                    type={tot.type}
                    inputProps={
                      i === 0
                        ? "{{ inputMode: 'numeric', pattern: '[0-9]*' }}"
                        : "{{ inputMode: 'numeric', pattern: '[0-9]*' }}"
                    }
                    label={tot.label}
                    id="outlined-start-adornment"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          {tot.inputProps}
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[1300px] px-8 divide-y-2 object-cover bg-et-bottom1">
          <div className="flex justify-between items-center  p-4">
            <h1 className="font-bold">Labours</h1>
            <div className="flex gap-x-2">
              <Button
                className="pl-8 pr-8 rounded-lg bg-primary-green gap-x-2"
                variant="contained"
              >
                <FaFileImport />
                Import
              </Button>
              <Button className="pl-8 pr-8 rounded-lg " variant="contained">
                New Task
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-8 gap-8  items-center justify-center p-4">
            {totalMaterials.map((tot, i) => (
              <div
                key={i}
                className={
                  i === 0
                    ? " col-span-2 bg-primary-white rounded-lg"
                    : "bg-primary-white rounded-lg"
                }
              >
                <Box component="form" noValidate autoComplete="off">
                  <TextField
                    fullWidth
                    label={tot.label}
                    type={tot.type}
                    id="outlined-start-adornment"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          {tot.inputProps}
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[1300px] px-8 divide-y-2 object-cover bg-et-bottom1">
          <div className="flex justify-between items-center  p-4">
            <h1 className="font-bold">Equitments</h1>
            <div className="flex gap-x-2">
              <Button
                className="pl-8 pr-8 rounded-lg bg-primary-green gap-x-2 "
                variant="contained"
              >
                <FaFileImport />
                Import
              </Button>
              <Button className="pl-8 pr-8 rounded-lg " variant="contained">
                New Task
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-8 gap-8  items-center justify-center p-4">
            {totalMaterials.map((tot, i) => (
              <div
                key={i}
                className={
                  i === 0
                    ? " col-span-2 bg-primary-white rounded-lg"
                    : "bg-primary-white rounded-lg"
                }
              >
                <Box component="form" noValidate autoComplete="off">
                  <TextField
                    fullWidth
                    type={tot.type}
                    inputProps={
                      i === 0
                        ? "{{ inputMode: 'numeric', pattern: '[0-9]*' }}"
                        : "{{ inputMode: 'numeric', pattern: '[0-9]*' }}"
                    }
                    label={tot.label}
                    id="outlined-start-adornment"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          {tot.inputProps}
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

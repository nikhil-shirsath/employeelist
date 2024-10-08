import { Button, Checkbox, FormControlLabel, FormGroup, Grid2, Paper, TextField, Typography } from '@mui/material'
import React from 'react'

const CreateEmployee = () => {
  const heading = { fontSize: "2.5rem", fontColor: "blue" };
  const paperstyle = { margin: "100% auto", padding: "20%", borderRadius: "1rem", width: "70%", borderShadow: "10px 10px 10px" }
  const row = { display: "flex", marginTop: "2rem" }
  const add = { display: "flex", width: "100%", marginTop: "2rem", fontSize: "1.2rem", fontWeight: "700", backgroundColor: "Blue", borderRadius: "1rem" }
  return (
    <div>
      <Grid2 align="center">
        <Paper style={paperstyle} xs={{
          width: {
            xs: "80vw",
            sm: "50vw",
            md: "40vw",
            lg: "30vw",
            xl: "20vw"
          },
          height: '60vh',
        }}>
          <Typography style={heading}>
            Create Empoyee
          </Typography>
          <form>
            <TextField sx={{ label: { fontWeight: "700", fontSize: "1.2rem" } }} style={row} type='text' label="Enter Name"></TextField>

            <TextField sx={{ label: { fontWeight: "700", fontSize: "1.2rem" } }} style={row} type="email" label="Enter Email"></TextField>

            <TextField sx={{ label: { fontWeight: "700", fontSize: "1.2rem" } }} style={row} type="text" label="Enter Mobile No"></TextField>

            <label sx={{ fontWeight: "700", fontSize: "1.2rem" }} style={row}> Course</label>
            <FormGroup label="Course">
              <FormControlLabel control={<Checkbox defaultChecked />} label="MCA" />
              <FormControlLabel control={<Checkbox />} label="BCA" />
              <FormControlLabel control={<Checkbox />} label="BSC" />
            </FormGroup>

            
            <Button variant='contained' style={add}>Add</Button>
          </form>
        </Paper>
      </Grid2>
    </div>
  )
}

export default CreateEmployee
/**
 * Name		textbox
  	
Email		textbox
  	
Mobile No		textbox
  	
Designation	HR/Manager/sales	Dropdown
  	
Gender	M/F	Radio Button
  	
Course	MCA/BCA/BSC	Checkbox
  	
Img Upload		File Upload
 */
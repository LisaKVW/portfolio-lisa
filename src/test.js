import React from 'react';

const test = (props) => {
  return (
    <div>
      <FormControl fullWidth={true}>
        <TextField required label="Full name" variant="filled" id="full-name" name="name" className="form-field" />
      </FormControl>
      <FormControl fullWidth={true}>
        <TextField required label="Email" id="email" name="email" variant="filled" className="form-field" onChange />
      </FormControl>
      <FormControl fullWidth={true}>
        <TextField required label="Message" variant="filled" name="message" multiline={true} rows="10" />
      </FormControl>
      <FormControl>
        <div style={{ padding: 20 }}>
          <Grid container spacing={2}>
            <div className="form-submit">
              <Button variant="contained" color="primary">Submit</Button>
            </div>
          </Grid>
          </div>
            </FormControl>
       </div >
   )
}

export default test
import Typography from '@mui/material/Typography'

function TextInformationFlight(props: {
  label: string
  data: string
}): JSX.Element {
  return (
    <>
      <Typography sx={{ fontSize: 14 }} color="purple" gutterBottom>
        {props.label} <span style={{ color: 'black' }}>{props.data}</span>
      </Typography>
    </>
  )
}

export { TextInformationFlight }

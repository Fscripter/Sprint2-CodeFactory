'use client'
import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Box, Stack } from '@mui/material'
import data from '../components/data/dataFlights.json'
import Modal from '@mui/material/Modal'
import { useState } from 'react'
import Grid from '@mui/material/Grid'
import { TextInformationFlight } from './tools'

interface iFlightInformation {
  flightType: string
  origin: string
  destination: string
  entryTime: string
  exitTime: string
  flightCode: string
  passengerCount: number
  price: number
  taxPercentage: number
  surchargePercentage: number
  departureDate: string
  arrivalDate: string
  departureTime: string
  arrivalTime: string
}
function FlightInformation(props: iFlightInformation): JSX.Element {
  const [open, setOpen] = useState(false)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleOpenDeleteModal = () => setDeleteModalOpen(true)
  const handleCloseDeleteModal = () => setDeleteModalOpen(false)

  const handleDeleteConfirm = () => {
    // Aquí iría la lógica para eliminar el vuelo
    console.log('Vuelo eliminado')
  }
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="black" gutterBottom>
          Vuelo Nacional
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign="center"
          color={'black'}
        >
          {props.flightCode}
        </Typography>
        <TextInformationFlight
          label="Tipo de aeronave"
          data={props.flightType}
        ></TextInformationFlight>
        <TextInformationFlight
          label="Origen"
          data={props.origin}
        ></TextInformationFlight>
        <TextInformationFlight
          label="Destino"
          data={props.destination}
        ></TextInformationFlight>
        <TextInformationFlight
          label="Horario de salida"
          data={props.exitTime}
        ></TextInformationFlight>
        <TextInformationFlight
          label="Horario de llegada"
          data={props.entryTime}
        ></TextInformationFlight>
      </CardContent>
      <CardActions>
        <Stack
          spacing={6}
          justifyContent="space-around"
          direction="row"
          sx={{ width: '100%' }}
        >
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={handleOpen}
          >
            VER MAS
          </Button>
          <Button size="small" variant="contained" color="warning">
            EDITAR
          </Button>
          <Button
            size="small"
            variant="contained"
            color="error"
            onClick={handleOpenDeleteModal}
          >
            ELIMINAR
          </Button>
        </Stack>
      </CardActions>
      <DeleteConfirmationModal
        open={deleteModalOpen}
        onClose={handleCloseDeleteModal}
        onDeleteConfirm={handleDeleteConfirm}
        flightCode={props.flightCode}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '50%',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            height: 400,
            color: 'black',
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            textAlign="center"
            sx={{ marginBottom: '15px', fontSize: 24 }}
          >
            Información Detallada del Vuelo
          </Typography>
          <Grid container spacing={2} sx={{ paddingLeft: '20%' }}>
            <Grid item xs={6}>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Codigo
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                textAlign="center"
              >
                {props.flightCode}
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="purple" gutterBottom>
                Tipo de aeronave:{' '}
                <span style={{ color: 'black' }}>{props.flightType}</span>
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="purple" gutterBottom>
                Origen: <span style={{ color: 'black' }}>{props.origin}</span>
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="purple" gutterBottom>
                Destino:{' '}
                <span style={{ color: 'black' }}>{props.destination}</span>
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="purple" gutterBottom>
                Horario de salida:{' '}
                <span style={{ color: 'black' }}>{props.exitTime}</span>
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="purple" gutterBottom>
                Horario de llegada:{' '}
                <span style={{ color: 'black' }}>{props.entryTime}</span>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{ fontSize: 14 }} color="purple" gutterBottom>
                Número de pasajeros:{' '}
                <span style={{ color: 'black' }}>{props.passengerCount}</span>
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="purple" gutterBottom>
                Precio: <span style={{ color: 'black' }}>{props.price}</span>
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="purple" gutterBottom>
                % de impuestos:{' '}
                <span style={{ color: 'black' }}>{props.taxPercentage}</span>
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="purple" gutterBottom>
                % sobretasa:{' '}
                <span style={{ color: 'black' }}>
                  {props.surchargePercentage}
                </span>
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="purple" gutterBottom>
                Fecha de salida:{' '}
                <span style={{ color: 'black' }}>{props.departureDate}</span>
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="purple" gutterBottom>
                Fecha de llegada:{' '}
                <span style={{ color: 'black' }}>{props.arrivalDate}</span>
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="purple" gutterBottom>
                Hora de salida:{' '}
                <span style={{ color: 'black' }}>{props.departureTime}</span>
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="purple" gutterBottom>
                Hora de llegada:{' '}
                <span style={{ color: 'black' }}>{props.arrivalTime}</span>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Card>
  )
}
function filterFlights(query: string) {
  // Convertimos el query a minúsculas para hacer la comparación sin importar mayúsculas o minúsculas
  const lowercaseQuery = query.toLowerCase()

  // Filtramos los vuelos que contengan el query en el origen o destino
  const filteredFlights = data.filter((flight) => {
    return (
      flight.flightCode.toLowerCase().includes(lowercaseQuery) ||
      flight.flightCode.toLowerCase().includes(lowercaseQuery)
    )
  })

  return filteredFlights
}
function DeleteConfirmationModal({
  open,
  onClose,
  onDeleteConfirm,
  flightCode,
}) {
  const handleDelete = () => {
    onDeleteConfirm()
    onClose()
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
          color: 'black',
        }}
      >
        <Typography
          id="modal-title"
          variant="h6"
          component="h2"
          textAlign="center"
          color="primary"
        >
          ¡Eliminacion de vuelo!
        </Typography>
        <Typography
          id="modal-description"
          sx={{
            mt: 2,
            border: '3px dotted',
            padding: '5px',
            color: 'purple',
            bgcolor: 'lavender',
            textAlign: 'center',
          }}
        >
          Codigo de vuelo: {flightCode}
        </Typography>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="contained" onClick={onClose}>
            Cancelar
          </Button>
          <Button variant="contained" color="error" onClick={handleDelete}>
            Confirmar
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}
export default function SearchFlights(props: any) {
  if (props.queryString != '') {
    const filteredResults = filterFlights(props.queryString)
    console.log(filteredResults)
    return (
      <Box sx={{ display: 'flex', maxWidth: '80%', flexWrap: 'wrap' }}>
        {filteredResults.map((flight, index) => (
          <FlightInformation key={index} {...flight} />
        ))}
      </Box>
    )
  }
  return (
    <Box sx={{ display: 'flex', maxWidth: '80%', flexWrap: 'wrap' }}>
      {data.map((flight, index) => (
        <FlightInformation key={index} {...flight} />
      ))}
    </Box>
  )
}

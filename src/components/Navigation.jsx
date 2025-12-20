import * as React from 'react';
import { useState } from "react";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import SendIcon from '@mui/icons-material/Send';
import XIcon from '@mui/icons-material/X';
import Swal from 'sweetalert2';
import Tooltip from "@mui/material/Tooltip";
import ModalAlert from './ModalAlert';


export default function SimpleBottomNavigation() {
  const [showAlert, setShowAlert] = useState(false);
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    /* Componente de Barra inferior */
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>

      {/* Componente de Alerta com Timer */}
      <ModalAlert
        show={showAlert}
        title="Compartilhado com sucesso!"
        icon="success"
        timer={2000}
      />

      <Tooltip title="Enviar para e-mail" arrow>
        <BottomNavigationAction
          label="Share"
          value="Share"
          icon={<SendIcon />}
          onClick={() => setShowAlert(true)}
          sx={{
              "&:hover": {
                color: "#1976d2",
              },
            }}
        />
      </Tooltip>
      
      <Tooltip title="Compartilhar pelo WhatsApp" arrow>
        <BottomNavigationAction
          label="WhatsApp"
          value="WhatsApp"
          icon={<WhatsAppIcon />}
          onClick={() => setShowAlert(true)}
          sx={{
              "&:hover": {
                color: "#1976d2",
              },
            }}
        />
      </Tooltip>
      
      <Tooltip title="Compartilhar pelo Instagram" arrow>
        <BottomNavigationAction
          label="Instagram"
          value="Instagram"
          icon={<InstagramIcon />}
          onClick={() => setShowAlert(true)}
          sx={{
              "&:hover": {
                color: "#1976d2",
              },
            }}
        />
      </Tooltip>
      
      <Tooltip title="Compartilhar pelo X" arrow>
        <BottomNavigationAction 
          label="X" 
          value="X" 
          icon={<XIcon />} 
          onClick={() => setShowAlert(true)}
          sx={{
              "&:hover": {
                color: "#1976d2",
              },
            }}
        />
      </Tooltip>
      
    </BottomNavigation>
  );
}
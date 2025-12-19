import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import SendIcon from '@mui/icons-material/Send';
import XIcon from '@mui/icons-material/X';
import Swal from 'sweetalert2';
import Tooltip from "@mui/material/Tooltip";


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>

      <Tooltip title="Enviar para e-mail" arrow>
        <BottomNavigationAction
          label="Share"
          value="Share"
          icon={<SendIcon />}
          onClick={() => 
            Swal.fire({
              title: "Enviado para o seu e-mail!",
              icon: "success",
              timer: 2000
            })
          }
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
          onClick={() => window.open("https://web.whatsapp.com", "_blank")}
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
          onClick={() => window.open("https://www.instagram.com/", "_blank")}
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
          onClick={() => window.open("https://x.com/", "_blank")}
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
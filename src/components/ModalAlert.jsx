// components/Alert.jsx
import { useEffect } from "react";
import Swal from "sweetalert2";

export default function ModalAlert({ show, title, icon, timer = 3000 }) {

  useEffect(() => {
    if (show) {
      Swal.fire({
        title,
        icon,
        timer,
        showConfirmButton: true,
      });
    }
  }, [show, title, icon, timer]);

  return null;
}

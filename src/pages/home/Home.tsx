import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Table from "../table/table";
import { fetchRandomUser } from "@/api/axios";
import HeaderBar from "../header/header";

interface User { 
  name: {
    first: string
  };
  id: {
    value: string
  }
  cell: string
}

function Home() {
  const [count, setCount ] = useState(0)
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData: User= await fetchRandomUser();
        setUser(userData);
      } catch (error) {
        console.error('Erro ao obter dados do usuário:', error);
      }
    };

    getUserData();
  }, []);

  const items = [
    {
      id: user?.id?.value,
      name: user?.name?.first,
      telefone: user?.cell
    }
  ]

  const header = [
    {
      titulo: 'oi',
      login: 'Login',
      cadastro: "Cadastro"
    }
  ]
  
  return (
    <Grid container xs={12}>
      <Grid item xs={12}>
        <HeaderBar headerProps={header} />
      </Grid>
      <Grid item xs={12}>
      <Box sx={{ m: "auto" }}>
        <Button onClick={() => setCount(count + 1)}>Clique aqui</Button>
      </Box>
      </Grid>
      <Grid item>
      <Box display={'flex'}>
        <Typography>Contador: {count}</Typography>
      </Box>
      </Grid>
      <Grid item xs={12}>
        <Table items={items} />
      </Grid>
    </Grid>
  );
}

export default Home;

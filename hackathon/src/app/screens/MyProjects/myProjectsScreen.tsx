import { Grid } from "@mui/material";
import BoxSx from "./components/headButtons";

/* eslint-disable-next-line */
export interface MyProjectsScreenProps {}

export function MyProjectsScreen(props: MyProjectsScreenProps) {
  return (
    <div>
    <Grid container spacing={2} rowSpacing={3}>
      <Grid item xs={11}>
        <Grid container spacing={2} rowSpacing={3} style={{ gap: 15 }}>
          <h1 style={{ width: '100%' }}> הפרויקט שלי </h1>
          <BoxSx 
          title="שם הפרויקט"/>
          <BoxSx 
          title="שיתופי פעולה"
          />
          <BoxSx 
          title = "על השגריר"/>
          </Grid>
          </Grid>
          </Grid>
    </div>
  )
}

export default MyProjectsScreen;

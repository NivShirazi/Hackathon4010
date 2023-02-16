import { Grid } from '@mui/material';
import SimpleProject from 'src/app/components/simpleProject/simpleProject';

/* eslint-disable-next-line */
export interface HomeScreenProps {}

export function HomeScreen(props: HomeScreenProps) {
  return (
    <div>
      <Grid container spacing={2} rowSpacing={3}>
        <Grid item xs={11}>
          <Grid container spacing={2} rowSpacing={3} style={{ gap: 15 }}>
            <h1 style={{ position: 'relative', right: '50%', width: '100%' }}>
              {' '}
            </h1>
            <SimpleProject
              authorName="דניאל ויס"
              projName="SAVE THE TURTLES"
              date="15/02/23"
              phoneNumber="509595094"
              description='לורם איפסום או בקיצור ליפסום הוא מלל מקובל וחסר משמעות המשמש "ממלא מקום" בעת עריכה, בתחום הדפוס, ההדפסה והפרסום. הטקסט משמש כלי לייצוג דפוס שאמור להתווסף למוצר הפרסום בעתיד.
               מדובר במלל ארוך במיוחד שניתן לבדוק עמו גופנים,
               וכן התאמת המלל לעמודים המעוצבים ובדיקת סוגי וגודלי גופן והתאמתם למוצר הסופי.'
               labels={["איכות הסביבה", "חינוך", "בעלי חיים"]}
               imgUrl = ".\assets\turtule.jpg"
                        />
                        <SimpleProject
                            authorName="ניב שיראזי"
                            projName="זוכרים ומדברים"
                            date="15/02/23"
                            phoneNumber="509595094"
                            description='לורם איפסום או בקיצור ליפסום הוא מלל מקובל וחסר משמעות המשמש "ממלא מקום" בעת עריכה, בתחום הדפוס, ההדפסה והפרסום. הטקסט משמש כלי לייצוג דפוס שאמור להתווסף למוצר הפרסום בעתיד.
               מדובר במלל ארוך במיוחד שניתן לבדוק עמו גופנים,
               וכן התאמת המלל לעמודים המעוצבים ובדיקת סוגי וגודלי גופן והתאמתם למוצר הסופי.'
               labels={["קהילה", "היסטוריה", "הדור השלישי"]}
               imgUrl = ".\assets\community.jpg" 
                        />
                        <SimpleProject
                            authorName="יהונתן בוכריס"
                            projName="חינוך פיננסי"
                            date="15/02/23"
                            phoneNumber="509595094"
                            description='לורם איפסום או בקיצור ליפסום הוא מלל מקובל וחסר משמעות המשמש "ממלא מקום" בעת עריכה, בתחום הדפוס, ההדפסה והפרסום. הטקסט משמש כלי לייצוג דפוס שאמור להתווסף למוצר הפרסום בעתיד.
               מדובר במלל ארוך במיוחד שניתן לבדוק עמו גופנים,
               וכן התאמת המלל לעמודים המעוצבים ובדיקת סוגי וגודלי גופן והתאמתם למוצר הסופי.'
               labels={["כלכלה", "אוכלוסיות בסיכון", "חינוך והשכלה"]}
               imgUrl = ".\assets\money.jpg" 
                        />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default HomeScreen;

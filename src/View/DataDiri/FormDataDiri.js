import React from 'react'
import {makeStyles, useTheme} from "@material-ui/core/styles";

import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
    line:{
        display:'block',
        width:'100%',
        bordertop: '1px solid #ccc',
    },
});

export default function Formu(){
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={6} >
                    <CardActionArea component="a" href="#">
                        <Card className={classes.card}>
                            <div className={classes.cardDetails}>
                                <CardContent align={"left"}>
                                    <Typography component="h2" variant="h5" >
                                        Data Diri
                                    </Typography>
                                    <br/>
                                    <Typography variant="subtitle1" paragraph>
                                        NIM                    :
                                        <span className={classes.line}/>
                                        Nama                   :
                                        <span className={classes.line}/>
                                        Tempat / Tanggal Lahir :
                                        <span className={classes.line}/>
                                        Jenis Kelamin          :
                                        <span className={classes.line}/>
                                        Alamat                 :
                                        <span className={classes.line}/>
                                        Agama                  :
                                        <span className={classes.line}/>
                                        Golongan Darah         :
                                        <span className={classes.line}/>
                                        Kabupaten              :
                                        <span className={classes.line}/>
                                        Kode Pos               :
                                        <span className={classes.line}/>
                                        Email Pribadi          :
                                        <span className={classes.line}/>
                                        No. Telepon            :
                                        <span className={classes.line}/>
                                        No. HP1                :
                                        <span className={classes.line}/>
                                        No. HP2                :
                                        <span className={classes.line}/>
                                        Anak ke / dari         :
                                        <span className={classes.line}/>
                                    </Typography>
                                </CardContent>
                            </div>
                        </Card>
                    </CardActionArea>
                </Grid>
                <br/>
                <Grid item xs={12} md={6} lg={6} >
                    <CardActionArea component="a" href="#">
                        <Card className={classes.card}>
                            <div className={classes.cardDetails}>
                                <CardContent align={"left"}>
                                    <Typography component="h2" variant="h5" >
                                        Data Orang Tua
                                    </Typography>
                                    <br/>
                                    <Typography variant="subtitle1" paragraph>
                                        Nama Ayah              :
                                        <span className={classes.line}/>
                                        Nama Ibu                  :
                                        <span className={classes.line}/>
                                        Alamat Orang Tua :
                                        <span className={classes.line}/>
                                        Pekerjaan Ayah          :
                                        <span className={classes.line}/>
                                        Keterangan Pekerjaan Ayah                :
                                        <span className={classes.line}/>
                                        Rentang Penghasilan Ayah                  :
                                        <span className={classes.line}/>
                                        Penghasilan Pasti Ayah         :
                                        <span className={classes.line}/>
                                        No. HP Ayah              :
                                        <span className={classes.line}/>
                                        Pekerjaan Ibu               :
                                        <span className={classes.line}/>
                                        Keterangan Pekerjaan Ibu         :
                                        <span className={classes.line}/>
                                        Rentang Penghasilan Ibu            :
                                        <span className={classes.line}/>
                                        Penghasilan Pasti Ibu                :
                                        <span className={classes.line}/>
                                        Total Penghasilan Orang Tua                :
                                        <span className={classes.line}/>
                                        Jumlah Tanggungan         :
                                        <span className={classes.line}/>
                                        Total Penghasilan Orang Tua                :
                                        <span className={classes.line}/>
                                        Nama Wali               :
                                        <span className={classes.line}/>
                                        Alamat Wali               :
                                        <span className={classes.line}/>
                                        Pekerjaan Wali                :
                                        <span className={classes.line}/>
                                        Keterangan Pekerjaan Ibu               :
                                        <span className={classes.line}/>
                                        Rentang Penghasilan Wali                :
                                        <span className={classes.line}/>
                                        Penghasilan Pasti Wali               :
                                        <span className={classes.line}/>
                                        No. Telepon / No. Hp Wali                :
                                        <span className={classes.line}/>
                                    </Typography>
                                </CardContent>
                            </div>
                        </Card>
                    </CardActionArea>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={6} >
                    <CardActionArea component="a" href="#">
                        <Card className={classes.card}>
                            <div className={classes.cardDetails}>
                                <CardContent align={"left"}>
                                    <Typography component="h2" variant="h5" >
                                        Data Asrama
                                    </Typography>
                                    <br/>
                                    <Typography variant="subtitle1" paragraph>
                                        Nama Asrama                  :
                                        <span className={classes.line}/>
                                        Pengurus Asrama                   :
                                        <span className={classes.line}/>
                                        Kamar :
                                        <span className={classes.line}/>
                                        Teman Sekamar         :
                                        <span className={classes.line}/>
                                    </Typography>
                                </CardContent>
                            </div>
                        </Card>
                    </CardActionArea>
                </Grid>
                <Grid item xs={12} md={6} lg={6} >
                    <CardActionArea component="a" href="#">
                        <Card className={classes.card}>
                            <div className={classes.cardDetails}>
                                <CardContent align={"left"}>
                                    <Typography component="h2" variant="h5" >
                                        Data Asal Sekolah
                                    </Typography>
                                    <br/>
                                    <Typography variant="subtitle1" paragraph>
                                        Nomor Ijazah SMA             :
                                        <span className={classes.line}/>
                                        Nama SMA                :
                                        <span className={classes.line}/>
                                        Alamat SMA :
                                        <span className={classes.line}/>
                                        Kabupaten SMA         :
                                        <span className={classes.line}/>
                                        Telepon SMA               :
                                        <span className={classes.line}/>
                                        Kode Pos SMA                 :
                                        <span className={classes.line}/>
                                    </Typography>
                                </CardContent>
                            </div>
                        </Card>
                    </CardActionArea>
                </Grid>
            </Grid><Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={6} >
                <CardActionArea component="a" href="#">
                    <Card className={classes.card}>
                        <div className={classes.cardDetails}>
                            <CardContent align={"left"}>
                                <Typography component="h2" variant="h5" >
                                    Data Akademis
                                </Typography>
                                <br/>
                                <Typography variant="subtitle1" paragraph>
                                    Status Akhir                 :
                                    <span className={classes.line}/>
                                    Angkatan                 :
                                    <span className={classes.line}/>
                                    User Name :
                                    <span className={classes.line}/>
                                    Email Akademik        :
                                    <span className={classes.line}/>
                                    Program Studi       :
                                    <span className={classes.line}/>
                                    Kelas       :
                                    <span className={classes.line}/>
                                    Wali Mahasiswa        :
                                    <span className={classes.line}/>
                                    Jalur Usm        :
                                    <span className={classes.line}/>
                                </Typography>
                            </CardContent>
                        </div>
                    </Card>
                </CardActionArea>
            </Grid>
        </Grid>
        </React.Fragment>
    );
}
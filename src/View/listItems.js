import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CloseIcon from '@material-ui/icons/Close';
function logout() {
    localStorage.clear();
    window.location.href = '/';
}
function viewdashboard() {
    localStorage.clear();
    window.location.href = '/Dashboard';
}
function viewdatadiri(){
    localStorage.clear();
    window.location.href = '/DataDiri';
}
function viewpengumuman(){
    localStorage.clear();
    window.location.href = '/Pengumuman';
}
function viewfinance(){
    localStorage.clear();
    window.location.href = '/finance';
}
function viewizinbermalam(){
    localStorage.clear();
    window.location.href = '/izinBermalam';
}
function viewizinkeluar(){
    localStorage.clear();
    window.location.href = '/izinKeluar';
}


export const mainListItems = (
    <div>
        <ListItem button
        onClick={viewdashboard}>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem button
        onClick={viewdatadiri}>
            <ListItemIcon>
                <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Data Diri" />
        </ListItem>

        <ListItem button
        onClick={viewfinance}>
            <ListItemIcon>
                <AccountBalanceWalletIcon />
            </ListItemIcon>
            <ListItemText primary="Finance" />
        </ListItem>

        <ListItem button
                  onClick={viewizinkeluar}>
            <ListItemIcon>
                <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Izin Keluar" />
        </ListItem>

        <ListItem button
        onClick={viewizinbermalam}>
            <ListItemIcon>
                <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Izin Bermalam" />
        </ListItem>

        <ListItem button
        onClick={viewpengumuman}>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Pengumuman" />
        </ListItem>
    </div>
);

export const secondaryListItems = (
    <div>
        <ListItem button
                  onClick={logout}>
            <ListItemIcon>
                <CloseIcon />
            </ListItemIcon>
            <ListItemText primary=" Log Out" />
        </ListItem>
    </div>
);
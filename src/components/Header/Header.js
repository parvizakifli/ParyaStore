import React from "react";
import { Box } from "@mui/system";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const styles = {
    containers: {
        display: 'flex',
        justifyContent: 'center',
    },
    warapper: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '80%',
    },
    logo: { display: 'flex' },
    icons: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '15%',
        iconsColor: { color: 'gray' }
    },
}
export const Header = () => {
    return (<>
        <Box sx={styles.containers}>
            <Box sx={styles.warapper}>
                <Box sx={styles.logo}>
                    <div>logo</div>
                    <p>text</p></Box>
                <Box sx={styles.icons}>
                    <ShoppingCartIcon sx={styles.icons.iconsColor} /> <div className="price">1205 руб.</div>
                    <FavoriteBorderIcon />
                    <AccountCircleIcon sx={styles.icons.iconsColor} />
                </Box>
            </Box>
        </Box>


    </>)
}
import React from 'react'
import { Box } from '@mui/system'

const styles = {
    containers: {
        display: 'flex',
        justifyContent: 'center',
    },
    wrapper:{display:'flex',
            backgroundColor:'#F4EFE9',
             width: '80%',
},
}
export const Main=()=>{ 
    return(<>
     <Box sx={styles.containers}>
        <Box sx={styles.wrapper}>
          
        </Box>
    </Box>
    </>)
}
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'

function Information() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }}
    >
      <Typography variant='h6' sx={{ fontWeight: '400' }}>
        Mô Tả :
      </Typography>
      <Typography>
        - Kích thước: Ngang x Cao x Hông: 25x25x13 cm.
        <br />
        - Mô tả: Túi size trung, form mềm. Bên trong lót vải, có 1 ngăn chính lớn, 1 ngăn phụ. Khóa dây kéo.
      </Typography>
      <Divider sx={{ width: '50%' }}/>
      <Typography>
        - Chất liệu da thật cao cấp
        <br />
        - Sản xuất thủ công hoàn toàn tại Sài Gòn
        <br />
        - VẼ TAY trang trí độc đáo, bởi những họa sĩ tài năng.
        <br />
        - Bảo hành kỹ thuật trọn đời sản phẩm.
        <br />
        - Thương hiệu uy tín được yêu thích từ 2010
        <br />
        - Khách hàng có thể đặt hàng màu sắc theo yêu cầu.
        <br />
        - Hotline: 0909.720027
      </Typography>
    </Box>
  )
}

export default Information
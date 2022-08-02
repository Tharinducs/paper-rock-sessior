import { Col } from "antd";
import styled from "styled-components";
import COLORS from "../../context/COLORS";

const StyledCol = styled(Col)`
    height: 100vh;
    background-color: ${COLORS.baseBg};
`

export {
    StyledCol
}
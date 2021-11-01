import Card from "../components/Card"
import React from "react";

const styles = {
    flex_container: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: '10px',
    },
    container:{
        paddingTop: '40px',
    }
}

function SideBrowse(props) {
    return(
        <div>
            {/* <button onClick={this.handle_previous}>Prev</button>
            <button onClick={this.handle_next}>Next</button> */}
            <div style={styles.container}>
                {props.title}
                <div style={styles.flex_container}>
                    <Card picture="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1597763166-41CRnvYqmqL.jpg?crop=1xw:1.00xh;center,top&resize=480:*"/>
                    <Card picture="https://images-na.ssl-images-amazon.com/images/I/51CgKGfMelL._AC_UL320_SR320,320_.jpg"/>
                    <Card picture="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1550162485-51zKzMIwVDL.jpg?crop=1xw:1.00xh;center,top&resize=480:*"/>
                    <Card picture="https://m.media-amazon.com/images/I/61CnOKdmBeL._SX522_.jpg"/>
                    <Card picture="https://images-na.ssl-images-amazon.com/images/G/01/kindle/merch/2019/Trade-in/51ydNSj0AiL.jpg"/>
                    <Card picture="https://m.media-amazon.com/images/I/51PbyjVSxsL._AC_SX342_.jpg"/>
                    <Card picture="https://m.media-amazon.com/images/I/61qiVLRGn8L._AC_SS450_.jpg"/>
                </div>
            </div>
        </div>
    )
}

export default SideBrowse;
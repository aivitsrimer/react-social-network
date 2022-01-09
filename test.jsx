import React from "react";

const getStylesByTypes = (type, styleType) => {
    switch (type) {
        case 'one':
            switch (styleType) {
                case 'small':
                    return {
                        img: {},
                        label: {}
                    }
                case 'big':
                    return {
                        img: {...styles.suoperImg, ...props.styleImg},
                        label: {}
                    }
            }
        case 'two':
            switch (styleType) {
                case 'small':
                    return {
                        img: {},
                        label: {}
                    }
                case 'big':
                    return {
                        img: {},
                        label: {}
                    }
            }
    }
}

const renderBlock = (type, styleType) => {
    // const mapStyles = {
    //     'img': {
    //         'small': {
    //             'img1': {

    //             },
    //             'text1': {
                    
    //             }
    //         },
    //         'big': {

    //         }
    //     },
    //     'text': {

    //     }
    // }
    let styles = getStylesByTypes(type, styleType);
    switch (type) {
        case 'one':
            return <div style={styles['img']}>Image<label style={styles['label']}></label></div>
        case 'two':
            switch (styleType) {
                case 'small':
                    styles = {
                        img: {},
                        label: {}
                    }
                    break;
                case 'big':
                    styles = {
                        img: {},
                        label: {}
                    }
                    break;
            }
            return <div style={styles['img']}>Image<label style={styles['label']}></label></div>
    }
}


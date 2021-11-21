import { StyleSheet } from 'react-native';

export const Colors = {
    colorPrimary: '#7476EC',
    colorSecondary: '#3399CC',
    colorTertiary: '#3399CC',
    colorLightGray: '#333333',
    colorGray: '#A9A9A9',
    colorDark: '#000000',
    colorWhite: '#ffffff',
    colorDanger: '#CC2B2B',
    colorSuccess: '#5cb85c',
}

const tiny = {
    fontSize: 12,
}
const small = {
    fontSize: 15,
}
const normal = {
    fontSize: 20,
}
const subtitle = {
    fontSize: 20,
    fontWeight: '700',
}
const title = {
    fontSize: 23,
    fontWeight: '700',
}
const supertitle = {
    fontSize: 30,
    fontWeight: '900',
}

export default StyleSheet.create({
    MegaMargin: { margin: 50 },
    MegaMarginVertical: { marginVertical: 50 },
    MegaMarginHorizontal: { marginHorizontal: 50 },
    MegaMarginTop: { marginTop: 50 },
    MegaMarginLeft: { marginLeft: 50 },
    MegaMarginBottom: { marginBottom: 50 },
    MegaMarginRight: { marginRight: 50 },

    MegaPadding: { padding: 50 },
    MegaPaddingVertical: { paddingVertical: 50 },
    MegaPaddingHorizontal: { paddingHorizontal: 50 },
    MegaPaddingTop: { paddingTop: 50 },
    MegaPaddingLeft: { paddingLeft: 50 },
    MegaPaddingBottom: { paddingBottom: 50 },
    MegaPaddingRight: { paddingRight: 50 },

    XlargePadding: { padding: 40 },
    XlargePaddingVertical: { paddingVertical: 40 },
    XlargePaddingHorizontal: { paddingHorizontal: 40 },
    XlargePaddingTop: { paddingTop: 40 },
    XlargePaddingLeft: { paddingLeft: 40 },
    XlargePaddingBottom: { paddingBottom: 40 },
    XlargePaddingRight: { paddingRight: 40 },

    XlargeMargin: { margin: 40 },
    XlargeMarginVertical: { marginVertical: 40 },
    XlargeMarginHorizontal: { marginHorizontal: 40 },
    XlargeMarginTop: { marginTop: 40 },
    XlargeMarginLeft: { marginLeft: 40 },
    XlargeMarginBottom: { marginBottom: 40 },
    XlargeMarginRight: { marginRight: 40 },

    largePadding: { padding: 20 },
    largePaddingVertical: { paddingVertical: 20 },
    largePaddingHorizontal: { paddingHorizontal: 20 },
    largePaddingTop: { paddingTop: 20 },
    largePaddingLeft: { paddingLeft: 20 },
    largePaddingBottom: { paddingBottom: 20 },
    largePaddingRight: { paddingRight: 20 },

    largeMargin: { margin: 20 },
    largeMarginVertical: { marginVertical: 20 },
    largeMarginHorizontal: { marginHorizontal: 20 },
    largeMarginTop: { marginTop: 20 },
    largeMarginLeft: { marginLeft: 20 },
    largeMarginBottom: { marginBottom: 20 },
    largeMarginRight: { marginRight: 20 },

    basicPadding: { padding: 10 },
    basicPaddingVertical: { paddingVertical: 10 },
    basicPaddingHorizontal: { paddingHorizontal: 10 },
    basicPaddingTop: { paddingTop: 10 },
    basicPaddingLeft: { paddingLeft: 10 },
    basicPaddingBottom: { paddingBottom: 10 },
    basicPaddingRight: { paddingRight: 10 },

    basicMargin: { margin: 10 },
    basicMarginVertical: { marginVertical: 10 },
    basicMarginHorizontal: { marginHorizontal: 10 },
    basicMarginTop: { marginTop: 10 },
    basicMarginLeft: { marginLeft: 10 },
    basicMarginBottom: { marginBottom: 10 },
    basicMarginRight: { marginRight: 10 },

    miniPadding: { padding: 5 },
    miniPaddingVertical: { paddingVertical: 5 },
    miniPaddingHorizontal: { paddingHorizontal: 5 },
    miniPaddingTop: { paddingTop: 5 },
    miniPaddingLeft: { paddingLeft: 5 },
    miniPaddingBottom: { paddingBottom: 5 },
    miniPaddingRight: { paddingRight: 5 },

    miniMargin: { margin: 5 },
    miniMarginVertical: { marginVertical: 5 },
    miniMarginHorizontal: { marginHorizontal: 5 },
    miniMarginTop: { marginTop: 5 },
    miniMarginLeft: { marginLeft: 5 },
    miniMarginBottom: { marginBottom: 5 },
    miniMarginRight: { marginRight: 5 },

    container: {
        padding: 20,
        flex: 1,
    },

    centerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    splashContainer: {
        flex: 1,
        /*backgroundColor: Colors.colorPrimary*/
    },

    splashContainerAux: {
        flex: 1,
        backgroundColor: Colors.colorPrimary
    },

    backgroundImage: {
        flex: 1,
        resizeMode: 'stretch',
    },

    headerSplash: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },

    titleSplash: {
        color: Colors.colorLightGray,
        fontSize: 30,
        fontWeight: 'bold'
    },

    titleNoticia: {
        color: Colors.colorLightGray,
        fontSize: 20,
        fontWeight: 'bold'
    },

    dateNoticia: {
        color: Colors.colorGray,
        fontSize: 16,
    },

    subtitleCard: {
        color: Colors.colorLightGray,
        fontSize: 14,
    },

    cuerpoNoticia: {
        color: "#383838",
        fontSize: 16,
        textAlign: 'justify'
    },
    titleGuide: {
        color: Colors.colorLightGray,
        fontSize: 25,
        fontWeight: '400'
    },

    titleLogin: {
        color: Colors.colorWhite,
        fontSize: 20,
        fontWeight: 'bold'
    },

    textSplash: {
        color: Colors.colorLightGray,
        marginTop: 5
    },

    textSignSplash: {
        color: Colors.colorLightGray,
        fontWeight: 'bold'
    },

    footerSplash: {
        flex: 1,
        backgroundColor: Colors.colorWhite,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },

    menuTitle: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },

    menuCaption: {
        fontSize: 14,
        lineHeight: 14,
    },

    inputLabelTitle: {
        color: Colors.colorLightGray,
        fontSize: 16
    },

    alertInput: {
        borderBottomWidth: 0.5,
        borderColor: '#333333',
        borderRadius: 10
    },

    errorMsg: {
        color: Colors.colorDanger,
        fontSize: 14,
        fontWeight: 'bold'
    },

    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 3
    },

    cardImage: {
        borderRadius: 10,
        height: 125,
        resizeMode: "cover"
    },
    cardContactPhoto: {
        borderRadius: 10,
        width: 125,
        height: 125,
        resizeMode: "cover"
    },
    cardHorario: {
        borderRadius: 10,
        width: 100,
        height: 100,
        resizeMode: "cover"
    },
    cardReserva: {
        borderRadius: 10,
        width: 125,
        height: 125,
        resizeMode: "cover"
    },
    cardImageDetail: {
        borderRadius: 10,
        height: 200,
        resizeMode: "contain"
    },
    largeButton: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: Colors.colorPrimary,
        borderWidth: 1,
        marginTop: 15,
        backgroundColor: Colors.colorPrimary,
    },
    largePayButton: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: Colors.colorPrimary,
        borderWidth: 1,
        backgroundColor: Colors.colorPrimary,
    },
    largeButtonCerrarSesion: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: Colors.colorDanger,
        borderWidth: 1,
        marginTop: 15,
        backgroundColor: Colors.colorDanger,
    },
    largeButtonLogin: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        borderColor: Colors.colorPrimary,
        borderWidth: 1,
        marginTop: 15,
        marginHorizontal: 110,
        backgroundColor: Colors.colorPrimary,
    },
    smallButton: {
        width: '100%',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderColor: Colors.colorDark,
        borderWidth: 0.5,
        marginTop: 5,
    },
    smallDangerButton: {
        width: '100%',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderColor: Colors.colorDanger,
        borderWidth: 1,
        marginTop: 5,
        backgroundColor: Colors.colorDanger,
    },
    smallSuccessButton: {
        width: '100%',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderColor: Colors.colorSuccess,
        borderWidth: 1,
        marginTop: 5,
        backgroundColor: Colors.colorSuccess,
    },

    smallPrimaryButton: {
        width: '100%',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderColor: Colors.colorPrimary,
        borderWidth: 1,
        marginTop: 5,
        backgroundColor: Colors.colorPrimary,
    },
    smallbuttonText: {
        fontSize: 14,
        color: Colors.colorWhite,
        fontWeight: 'bold'
    },

    buttonText: {
        fontSize: 18,
        color: Colors.colorWhite,
        fontWeight: 'bold'
    },

    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: Colors.colorDark,
    },

    textInputLogin: {
        flex: 1,
        color: Colors.colorDark,
        textAlign: 'center'
    },

    actionLogin: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        borderRadius: 10,
        paddingVertical: 15,
        opacity: 0.8
    },

    actionAlternativeLogin: {
        flexDirection: 'row',
        marginTop: 10,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        borderRadius: 30,
        paddingVertical: 10,
        marginHorizontal: 50,
        opacity: 0.7
    },

    footerAuth: {
        flex: 3,
        justifyContent: 'flex-end',
        /*backgroundColor: Colors.colorWhite,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,*/
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    footerAuthAux: {
        flex: 5,
        backgroundColor: Colors.colorWhite,
        /*borderTopLeftRadius: 30,
        borderTopRightRadius: 30,*/
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    shadowCard: {
        shadowRadius: 0,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 2,
    },
    shadowCardAlt: {
        shadowRadius: 0,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 2,
        flexDirection: 'row',
        alignItems: 'center',
        width: '45%',
        marginHorizontal: 5
    },
    doubleColumnContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    opacityOverlay: {
        shadowRadius: 0,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 2,
    },

    subtitleCenter: {
        textAlign: "center",
        color: Colors.colorWhite,
        fontSize: 13,
        fontWeight: '200'
    },

    imageICON: {
        height: 30,
        width: 30,
        marginVertical: 10,
        marginHorizontal: 20,
        tintColor: Colors.colorPrimary,
    },

    principalICON: {
        height: 40,
        width: 40,
        marginVertical: 10,
        marginHorizontal: 20,
    },

    menuCards: {
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: 10
    },

    menuCardsAlternative: {
        width: '100%',
        borderRadius: 10
    },

    shadowBorder: {
        shadowRadius: 0,
        backgroundColor: 'white',
        margin: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 2,
    },

    votacionCard: {
        borderRadius: 10,
        backgroundColor: Colors.colorWhite
    },

    separatorGray: {
        borderBottomColor: '#DCDCDE',
        borderBottomWidth: 1,
        marginHorizontal: 10
    },
    videoBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    floatingButton: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: Colors.colorPrimary
    },
    datePickerStyle: {
        width: 200,
        marginTop: 20,
    },
    WebViewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        flex: 1,
    },
    dropdownInput: {
        borderColor: '#DEDEDE',
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
        borderRadius: 5,
        overflow: 'hidden',
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    dropdownInputAgregar: {
        borderColor: '#DEDEDE',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        overflow: 'hidden',
        padding: 5,
        height: 50,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputText: {
        color: '#656565',
        fontSize: 18,
        fontWeight: 'bold',
        width: '100%',
        paddingVertical: 5,
        textAlignVertical: 'top'
    },
    floatingCloseButton: {
        position: 'absolute',
        width: 25,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        right: 5,
        bottom: 60,
    },
    floatingAddButton: {
        position: 'absolute',
        width: 25,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        right: 5,
        bottom: 5,
    },
    floatingCloseButtonImage: {
        resizeMode: 'contain',
        width: 20,
        height: 20,
    },
    categoryContainer: {
        borderRadius: 100,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    categoryImage: {
        width: 30,
        height: 30
    },
    historyBubbleContainer: {
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#E2E2E2',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    shadow: {
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    shadowOffset: {
        width: 0,
        height: 1,
    },
    camara: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        alignContent: 'center'
    },
    gallery: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingLeft: 20,
        alignContent: 'center'
    },
    close: {
        flex: 1,
        alignItems: 'flex-end'
    },
    flip: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 30
    },
    saveButtonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        marginVertical: 30
    },
    fabButtonStyle: {
        position: 'absolute',
        margin: 10,
        right: 0,
        bottom: 0,
        backgroundColor: Colors.colorPrimary
    },
    detailCard: {
        shadowRadius: 0,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 2,
    },
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalBody: {
        backgroundColor: "white",
        width: 300,
        padding: 20,
        paddingVertical: 40,
        alignSelf: 'center',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    modalHeader: {
        backgroundColor: Colors.colorPrimary,
        width: 300,
        padding: 20,
        alignSelf: 'center',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    ribbonContainer: {
        position: 'absolute',
        top: 0,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
        backgroundColor: Colors.colorPrimary,
        height: 20,
        borderRadius: 3,
    }
});
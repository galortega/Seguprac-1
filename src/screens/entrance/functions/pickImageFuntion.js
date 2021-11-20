import * as ImagePicker from 'expo-image-picker';

export function pickImageFuntion(setImages) {
    return async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            base64: true,
        });

        if (!result.cancelled) {
            console.log(result)
            //   arr = images;
            //   arr.push(result.uri)
            //   console.log(arr)
            setImages(result.uri);
        }
    };
}

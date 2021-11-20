import * as ImagePicker from 'expo-image-picker';

export function pickImageFuntion(setImage, type) {
    if (type) {
        return async () => {
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
                base64: true
            });

            if (!result.cancelled) {
                //   arr = images;
                //   arr.push(result.uri)
                //   console.log(arr)
                setImage(result.uri);
            }
        };
    } else {
        return async () => {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
                base64: true
            });

            if (!result.cancelled) {
                //   arr = images;
                //   arr.push(result.uri)
                //   console.log(arr)
                setImage(result.uri);
            }
        };
    }
}

// @flow
import {
    Animated
} from 'react-native';

export type Props = {
    id: string,
    fee: number,
    size: number,
    attr: Array<string>,
    accept: (string) => Promise<void>,
    reject: (string) => Promise<void>,
    setScrollEnable: (boolean) => void
}

export type State = {
    position: Animated.ValueXY
}

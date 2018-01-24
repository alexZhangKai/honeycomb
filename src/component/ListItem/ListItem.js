// @flow

import React from 'react';
import {
    View,
    Text,
    Animated,
    Dimensions,
    PanResponder,
    Image
} from 'react-native';

import styles from './styles';

const { width } = Dimensions.get('window');

type Props = {
    id: string,
    fee: number,
    size: number,
    attr: Array<string>,
    accept: (string) => Promise<void>,
    reject: (string) => Promise<void>,
    setScrollEnable: (boolean) => void
}

type State = {
    position: Animated.ValueXY
}

export default class ItemList extends React.PureComponent<Props, State> {
    gestureDelay: number;

    scrollViewEnable: boolean;

    panResponder: PanResponder;

    constructor(props: Props) {
        super(props);

        this.gestureDelay = 35;
        this.scrollViewEnable = true;

        const position = new Animated.ValueXY();
        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => false,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderTerminationRequest: (evt, gestureState) => false,
            onPanResponderMove: (evt, gestureState) => {
                if (Math.abs(gestureState.dx) > this.gestureDelay) {
                    this.setScrollViewEnable(false);
                    let newX = 0;
                    if (gestureState.dx > 0) newX = gestureState.dx - this.gestureDelay;
                    else newX = gestureState.dx + this.gestureDelay;
                    position.setValue({ x: newX, y: 0 });
                }
            },
            onPanResponderRelease: (evt, gestureState) => {
                if (Math.abs(gestureState.dx) < 150) {
                    Animated.timing(this.state.position, {
                        toValue: { x: 0, y: 0 },
                        duration: 500
                    }).start(() => {
                        this.setScrollViewEnable(true);
                    });
                }
                else if (gestureState.dx > 0) {
                    Animated.timing(this.state.position, {
                        toValue: { x: width, y: 0 },
                        duration: 500
                    }).start(() => {
                        this.props.reject(this.props.id);
                        this.setScrollViewEnable(true);
                    });
                }
                else {
                    Animated.timing(this.state.position, {
                        toValue: { x: -width, y: 0 },
                        duration: 500
                    }).start(() => {
                        this.props.accept(this.props.id);
                        this.setScrollViewEnable(true);
                    });
                }
            }
        });

        this.panResponder = panResponder;
        this.state = { position };
    }

    setScrollViewEnable(enable: boolean) {
        if (this.scrollViewEnable !== enable) {
            this.props.setScrollEnable(enable);
            this.scrollViewEnable = enable;
        }
    }

    render() {
        return (
            <View style={styles.listItem}>
                <Animated.View
                    style={[this.state.position.getLayout()]}
                    {...this.panResponder.panHandlers}
                >
                    <View style={styles.rejectCell}>
                        <Text style={styles.rejectCellText}>
                            REJECT
                        </Text>
                    </View>
                    <View style={styles.innerCell}>
                        <View style={styles.info}>
                            <Text>
                                {`Fee: ${this.props.fee}`}
                            </Text>
                            <Text>
                                {`Size: ${this.props.size}`}
                            </Text>
                        </View>
                        <View>
                            <Image
                                style={styles.image}
                                source={require('../../data/sampleSnapshot.png')}
                            />
                        </View>
                    </View>
                    <View style={styles.acceptCell}>
                        <Text style={styles.acceptCellText}>
                            ACCEPT
                        </Text>
                    </View>
                </Animated.View>
            </View>
        );
    }
}

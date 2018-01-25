// @flow

export type Job = {
    uuid: string,
    fee: number,
    size: number,
    attr: Array<string>
}

export type Props = {

}

export type State = {
    scrollEnable: boolean,
    data: Array<Job>
}

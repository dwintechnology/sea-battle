import constants from '../constants/constants'
import '../styles/Board.css'
import clsx from 'clsx';

export default function Board({versionUser=true}) {
    return (
        <>
            <div className='grid-container'>
                <div className='grid-item'></div>
                {constants.boardLetter.map((el, i) =>
                    <div key={i} className='grid-item'>{el}</div>
                )}
                {constants.boardLetter.map((el, i) =>
                    <>
                        <div className='grid-item'>{i + 1}</div>
                        <div className={clsx([versionUser ? 'blueBg' : 'grayBg' , 'grid-item , playingField'])}></div>
                        <div className={clsx([versionUser ? 'blueBg' : 'grayBg' , 'grid-item , playingField'])}></div>
                        <div className={clsx([versionUser ? 'blueBg' : 'grayBg' , 'grid-item , playingField'])}></div>
                        <div className={clsx([versionUser ? 'blueBg' : 'grayBg' , 'grid-item , playingField'])}></div>
                        <div className={clsx([versionUser ? 'blueBg' : 'grayBg' , 'grid-item , playingField'])}></div>
                        <div className={clsx([versionUser ? 'blueBg' : 'grayBg' , 'grid-item , playingField'])}></div>
                        <div className={clsx([versionUser ? 'blueBg' : 'grayBg' , 'grid-item , playingField'])}></div>
                        <div className={clsx([versionUser ? 'blueBg' : 'grayBg' , 'grid-item , playingField'])}></div>
                        <div className={clsx([versionUser ? 'blueBg' : 'grayBg' , 'grid-item , playingField'])}></div>
                        <div className={clsx([versionUser ? 'blueBg' : 'grayBg' , 'grid-item , playingField'])}></div>
                    </>
                )}
            </div>

        </>
    )
}
import React from "react"

import { AiOutlineInfoCircle as InfoIcon } from "react-icons/ai";
import { GoQuestion as QuestionIcon } from "react-icons/go";
import { HiOutlineOfficeBuilding as ContactIcon } from "react-icons/hi";
import { FaRegCommentDots as CommentIcon } from "react-icons/fa";
import Contacts from "./Contacts";

export default function Info(props) {

    function indexes(num, data) {
        const length = data.length;
        let indexList = [];
        while (indexList.length < num) {
            let randIndex = Math.trunc(Math.random() * length);
            if (!indexList.includes(randIndex)) {
                indexList.push(randIndex)
            }
        }
        return indexList;
    }

    return (
        <div className="info">
            <div className=" box contact">
                <ContactIcon className="icon" />
                <h3 className="box-title">Elérhetőségek</h3>
                <div className="devider"></div>

                <Contacts />
            </div>

            <div className="box">
                <InfoIcon className="icon" />
                <h3 className="box-title">Hírek</h3>
                <div className="devider"></div>
                <ul>
                    {props.hirek.map((hir, hirIndex) =>
                        hir.isActive &&
                        <li key={"hir" + hirIndex}>
                            <h4>{hir.title}</h4>
                            <p>{hir.text}</p>
                        </li>
                    )}
                </ul>
            </div>

            <div className="box">
                <QuestionIcon className="icon" />
                <h3 className="box-title">Gyakori kérdések</h3>
                <div className="devider"></div>
                <ul>
                    {indexes(2, props.gyik).map((element, gyikIndex) =>
                        <li key={gyikIndex}>
                            <h4>{props.gyik[element].question}</h4>
                            <p>{props.gyik[element].answer}</p>
                        </li>
                    )}
                </ul>
            </div>

            <div className="box reviews">
                <CommentIcon className="icon" />
                <h3 className="box-title">Vélemények</h3>
                <div className="devider"></div>
                <ul>
                    {indexes(2, props.velemenyek).map((element, index) =>
                        <li key={"reviews" + index}>
                            <h4>{props.velemenyek[element].name}</h4>
                            <p>" {props.velemenyek[element].short_comment} "</p>
                            {false && <p className="date">{props.velemenyek[element].timestamp.split("T")[0]}</p>}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

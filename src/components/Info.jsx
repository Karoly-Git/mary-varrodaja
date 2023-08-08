import React from "react"

import { AiOutlineInfoCircle as InfoIcon } from "react-icons/ai";
import { GoQuestion as QuestionIcon } from "react-icons/go";
import { HiOutlineOfficeBuilding as ContactIcon } from "react-icons/hi";
import { FaRegCommentDots as CommentIcon } from "react-icons/fa";
import Contacts from "./Contacts";

export default function Info(props) {

    let hirToBeDisplayed = props.hirek.filter(hir => hir.isActive).length > 0;
    let allActiveGyik = props.gyik.filter(gyik => gyik.isActive);
    let allActiveVelemenyek = props.velemenyek.filter(velemeny => velemeny.isActive);

    function chooseRandomElement(num, data) {
        const length = data.length;
        isNaN(num) || num < 1 ? num = 1 : num = num;
        length < num ? num = length : num = num;

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
            <div className="box contact-box">
                <ContactIcon className="icon" />
                <h3 className="box-title">Elérhetőségek</h3>
                <div className="devider"></div>

                <Contacts />
            </div>

            {hirToBeDisplayed && <div className="box hirek-box">
                <InfoIcon className="icon" />
                <h3 className="box-title">Hírek</h3>
                <div className="devider"></div>
                <ul>
                    {props.hirek.map((hir, hirIndex) =>
                        hir.isActive &&
                        <li key={hirIndex}>
                            <h4>{hir.title}</h4>
                            <p>{hir.text}</p>
                        </li>
                    )}
                </ul>
            </div>}

            <div className="box gyik-box">
                <QuestionIcon className="icon" />
                <h3 className="box-title">Gyakori kérdések</h3>
                <div className="devider"></div>
                <ul>
                    {chooseRandomElement(2, allActiveGyik).map((element, gyikIndex) =>
                        <li key={gyikIndex}>
                            <h4>{allActiveGyik[element].question}</h4>
                            <p>{allActiveGyik[element].answer}</p>
                        </li>
                    )}
                </ul>
            </div>

            <div className="box review-box">
                <CommentIcon className="icon" />
                <h3 className="box-title">Vélemények</h3>
                <div className="devider"></div>
                <ul>
                    {chooseRandomElement(2, allActiveVelemenyek).map((element, reviewIndex) =>
                        <li key={reviewIndex}>
                            <h4>{allActiveVelemenyek[element].name}</h4>
                            <p>" {allActiveVelemenyek[element].comment} "</p>
                            {false && <p className="date">{allActiveVelemenyek[element].timestamp.split("T")[0]}</p>}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

import React from 'react';
import CommunityCard from '../../components/Community/CommunityCard';

import './Community.css';

function CommunityContainer() {
    const groupsData = [
        {
            imgUrl: 'https://scontent.fsof3-1.fna.fbcdn.net/v/t1.0-9/92269101_2759561317502934_45117377314029568_o.jpg?_nc_cat=111&_nc_sid=825194&_nc_ohc=GF89b4G6QfkAX9tzfOO&_nc_ht=scontent.fsof3-1.fna&oh=504ff47ae73787148413f481a8af0cb3&oe=5EF25FC7',
            title: 'SoftUni JS Community',
            membersCount: 1200,
            linkUrl: 'https://www.facebook.com/groups/SoftUniJavaScriptCommunity/',
            description: 'Group for all SoftUni students in the JavaScript path for socialization and making friendships between students in the community.'
        },
        {
            imgUrl: 'https://scontent.fsof3-1.fna.fbcdn.net/v/t1.0-9/92176579_2759559214169811_8180731917881049088_o.jpg?_nc_cat=104&_nc_sid=ca434c&_nc_oc=AQl-nDddFhzmopLPjKgJI-tbvz1y1ll89ZFRBbAPHhypTli3SDvXizV26V7ps-mGrAQ&_nc_ht=scontent.fsof3-1.fna&oh=7c5e5622b64f313b9dc6a819a9241d5a&oe=5EF4F3FA',
            title: 'SoftUni Java Community',
            membersCount: 1400,
            linkUrl: 'https://www.facebook.com/groups/SoftUniJavaCommunity/',
            description: 'Group for all SoftUni students in the Java path for socialization and making friendships between students in the community.'
        },
        {
            imgUrl: 'https://scontent.fsof3-1.fna.fbcdn.net/v/t1.0-9/92098979_2759559720836427_2257038204907552768_o.jpg?_nc_cat=105&_nc_sid=ca434c&_nc_oc=AQkoHJpAQnIf0sSijNJDDWkPN_nMABIDUzkbyT3wg69K8zFXRPZBmNus0BLASQZWeeM&_nc_ht=scontent.fsof3-1.fna&oh=a24c6ea2128c353c8b0aa6ce2230cad6&oe=5EF49CFB',
            title: 'SoftUni Python Community',
            membersCount: 2000,
            linkUrl: 'https://www.facebook.com/groups/SoftUniPythonCommunity/',
            description: 'Group for all SoftUni students in the Python path for socialization and making friendships between students in the community.'
        },
        {
            imgUrl: 'https://scontent.fsof3-1.fna.fbcdn.net/v/t1.0-9/92152225_2759557920836607_7176071778094022656_o.jpg?_nc_cat=104&_nc_sid=ca434c&_nc_oc=AQkyNV2HEWuR05218_-yHlcvD7XbsphtRD1SCN43o1vHHm6YGk-EPv0cO8t3Vy5xe8g&_nc_ht=scontent.fsof3-1.fna&oh=66e7df92b7b348a6d26e3802e8de691e&oe=5EF5615D',
            title: 'SoftUni C# Community',
            membersCount: 3000,
            linkUrl: 'https://www.facebook.com/groups/SoftUniCSharpCommunity/',
            description: 'Group for all SoftUni students in the C# path for socialization and making friendships between students in the community.'
        }
    ];

    return (
        <section className="help-center__community-wrapper">
            {
                groupsData.map(gD => 
                    <CommunityCard {...gD}>

                    </CommunityCard>
                )
            }
        </section>
    )
}

export default CommunityContainer;
import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from '../Title';

// Generate Sales Data
function createData(time, amount) {
    return { time, amount };
}

const data = [
    createData('Sem 1', 0),
    createData('Sem 2', 3.10),
    createData('Sem 3', 3.20),
    createData('Sem 4', 3.30),
    createData('Sem 5', 3.40),
    createData('Sem 6', 3.50),
    createData('Sem 7', 3.60),
    createData('Sem 8', 3.70),
];

export default function Chart() {
    const theme = useTheme();

    return (
        <React.Fragment>
            <Title>Hasil Studi</Title>
            <ResponsiveContainer>
                <LineChart
                    data={data}
                    margin={{
                        top: 16,
                        right: 16,
                        bottom: 0,
                        left: 24,
                    }}
                >
                    <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
                    <YAxis stroke={theme.palette.text.secondary}>
                        <Label
                            angle={270}
                            position="left"
                            style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
                        >
                        </Label>
                    </YAxis>
                    <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </React.Fragment>
    );
}
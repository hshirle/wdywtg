import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
    const [destination, setDestination] = useState("");

    return (
        <Container
            maxWidth="md"
            className="min-h-screen flex flex-col items-center justify-center relative"
            sx={{
                position: "relative",
                overflow: "hidden",
                background: "white"
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <Typography variant="h2" sx={{ fontFamily: "monospace" }} gutterBottom>
                    wdywtg
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" sx={{ fontFamily: "monospace" }} gutterBottom>
                    where do you want to go?
                </Typography>
            </motion.div>

            <Box mt={4} width="100%" maxWidth={500}>
                <TextField
                    variant="outlined"
                    fullWidth
                    label="Enter a place"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                />
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ textTransform: "none", mt: 2 }}
                >
                    Add to New List
                </Button>
                <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 2 }}>
                    or
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ textTransform: "none", mt: 2 }}
                >
                    Import Google List
                </Button>
            </Box>
        </Container>
    );
}

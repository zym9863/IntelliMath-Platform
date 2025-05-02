import { List, ListItem, ListItemButton, ListItemText, Typography, Paper } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Chapter } from '../../types/calculus';

interface ChapterListProps {
  chapters: Chapter[];
}

const ChapterList = ({ chapters }: ChapterListProps) => {
  // 按章节顺序排序
  const sortedChapters = [...chapters].sort((a, b) => a.order - b.order);
  
  return (
    <Paper elevation={2}>
      <List sx={{ width: '100%' }}>
        <ListItem>
          <Typography variant="h6">章节列表</Typography>
        </ListItem>
        {sortedChapters.map((chapter) => (
          <ListItem key={chapter.id} disablePadding>
            <ListItemButton component={RouterLink} to={`/chapter/${chapter.id}`}>
              <ListItemText 
                primary={`${chapter.order}. ${chapter.title}`} 
                secondary={chapter.description} 
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default ChapterList;

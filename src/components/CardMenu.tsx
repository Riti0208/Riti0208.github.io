import { Box } from '@mui/material';
import CardMenuItem from './CardMenuItem';
import pageList from '@/const/page-list';

interface Props {
  pageList: {
    title: string;
    description: string;
    thumbPath: string;
    slug: string;
  }[];
}

const CardMenu = (props: Props) => {
  return (
    <Box display='flex' sx={{ flexWrap: 'wrap', width: '1200px', justifyContent: 'space-evenly' }}>
      {props.pageList.map((item, index) => (
        <CardMenuItem
          key={index}
          title={item.title}
          description={item.description}
          thumbPath={item.thumbPath}
          slug={item.slug}
        />
      ))}
    </Box>
  );
};

export default CardMenu;

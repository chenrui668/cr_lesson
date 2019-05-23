import LinkedList from '../LinkedList';
import { isTSAnyKeyword } from '@babel/types';

describe('测试链表', () => {
    it('创建一个空链表', () => {
        const LinkedList = new LinkedList();
        expect(linkedList.head).toBeNull(null);
    })
})